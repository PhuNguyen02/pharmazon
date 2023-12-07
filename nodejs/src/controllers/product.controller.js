const fs = require('fs');
const { findProductsBycategory,findAllProducts } = require('./../repository/product.repository');
const { get } = require('http');
const PAGE_SIZE = 20;

const getProductsBycategory =  async(req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.summary = 'Get all products'
    // #swagger.description = 'Retrieve all products in database'
    const {category} = req.query;
    const products = await findProductsBycategory(category);
    //get all user
    res.status(200).json({
       products
    });
}

const getAllProduct = async(req, res) => {
    let params = {
        title: req.query.title,
        category: req.query.category,
        SKU: req.query.SKU,
        quantityOfUnit: req.query.quantityOfUnit,
        price: req.query.price,
        status: req.query.status,
        limit: req.query.limit,
        page: req.query.page,
        sort: req.query.sort,
        search: req.query.search,
    }
    params.offset= (params.page -1 ) * params.limit
    category === "ALL" ? (category = [...category]): (category = req.query.category.split(","))
    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort])
    let sortBy = {};
    if(sort[1]){
        sortBy[sort[0]] = sort[1];
    } else {
        sortBy[sort[0]] = "asc"
    }
    let products = await findAllProducts(params);
    res.status(200).json({
        products
    }) 
}

const getProductById = (req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.summary = 'Get product by Id'
    // #swagger.description = 'Get product by Id description'
    const {productId} = req.params 
    let products = JSON.parse(fs.readFileSync('data/products.json'));

    const product = products.find(product => product.id === Number(productId))

    if (!productId) {
        res.status(400);
        res.send(" Giá trị ID không hợp lệ");
    }

    res.status(400).json(product)
}

const createProduct= (req,res)=>{
    // #swagger.tags = ['Product']
    // #swagger.summary = 'Create Product'
    // #swagger.description = 'Create Product description'
    const {name, quantity, unitPrice,categoryId } = req.body
    const products = JSON.parse(fs.readFileSync('data/products.json'));
    const product = {
        name: name,
        quantity : quantity,
        unitPrice : unitPrice,
        categoryId : categoryId
    }
    products.push(product)
    fs.writeFileSync('data/products.json', JSON.stringify(products));
    res.status(200).json(product)
}

const updateProducts = (req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.summary = 'Update Product'
    // #swagger.description = 'Update Product description'
    let productId = req.params.id;
    let productReq = req.body;
    if (!productId) {
        res.status(400);
        res.send(" Giá trị ID không hợp lệ");
    }
    let products = JSON.parse(fs.readFileSync('data/products.json'));
    const indexProduct = products.findIndex(product => Number(product.id) === Number(productId))
    if (indexProduct === -1) {
        res.status(400).send("Id: " + productId + "không tồn tại. ");
    }
    let product = products[indexProduct]
    product.name = productReq.name

    // tương tự set các trường hợp khác 
    products[indexProduct] = product;
    fs.writeFileSync('data/products.json', JSON.stringify(products));
    res.status(200).json(product);
}
const deleteProduct =(req,res)=>{
    // #swagger.tags = ['Product']
    // #swagger.summary = 'Delete product'
    // #swagger.description = 'Delete product description'
    let productId = req.params.id;
    if (!productId) {
        res.status(400);
        res.send("Giá trị Id không hợp lệ");
    }
    let products = JSON.parse(fs.readFileSync('data/products.json'));
    const indexProduct = products.findIndex(product => Number(product.id) === Number(productId))
    if (indexProduct === -1) {
        res.status(400).send("Id không tồn tại : " + productId);
    }
    products.splice(indexProduct, 1);
    fs.writeFileSync('data/products.json', JSON.stringify(products));
    res.status(200).json("Xóa thành công");
}


module.exports = {getProductsBycategory,getProductById, createProduct,updateProducts,deleteProduct,getAllProduct }