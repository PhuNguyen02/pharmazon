const fs = require('fs');
const { findProductsBycategory, findAllProducts, insertProduct, updateProductById, findById, findAllProductsCount, findProductApi } = require('./../repository/product.repository');
const { get } = require('http');
const PAGE_SIZE = 20;

const getProductsBycategory = async (req, res) => {
    const { category } = req.query;
    const products = await findProductsBycategory(category);
    //get all user
    res.status(200).json({
        products
    });
}
const getAllProduct = async (req, res) => {
    let params = {
        title: req.query.title,
        category: req.query.category,
        SKU: req.query.SKU,
        quantityOfUnit: req.query.quantityOfUnit,
        quantityOfStock: req.query.quantityOfStock,
        price: req.query.price,
        status: req.query.status,
        limit: req.query.limit,
        page: req.query.page,
        sort: req.query.sort,
        search: req.query.search,
    }
    params.offset = (params.page - 1) * params.limit
    let products = await findAllProducts(params);
    const dataCount = await findAllProductsCount(params)
    res.status(200).json({
        data: products,
        count: dataCount[0]['COUNT(id)']
    })
}

const getProductApi = async (req, res) => {
    let params = {
        id: req.query.id,
        title: req.query.title,
        quantityOfStock: req.query.quantityOfStock,
        price: req.query.price,
    }
    let products = await findProductApi(params);
    res.status(200).json({ products })
}

const getProductById = async (req, res) => {
    let productId = req.params.id;
    console.log(productId);
    if (!productId) {
        res.status(400);
        res.send("Giá trị Id không hợp lệ");
    }
    const product = await findById(productId)
    res.status(200).json({
        data: product[0],
        product
    })
}

const createProduct = async (req, res) => {
    const { img, title, price, unit, quantityofunit, des, category, quantityOfStock, SKU, discount } = req.body
    const product = {
        img: img,
        title: title,
        price: price,
        unit: unit,
        quantityofunit: quantityofunit,
        category: category,
        des: des,
        discount: discount,
        SKU: SKU,
        quantityOfStock: quantityOfStock,
    }
    let any = await insertProduct(product)
    res.status(201).json(product)
}

const updateProducts = async (req, res) => {
    let productId = req.params.id;
    let productReq = req.body;
    if (!productId) {
        res.status(400);
        res.send(" Giá trị ID không hợp lệ");
    }
    const product = await findById(productId)
    if (!product) {
        res.status(400).send("product không tồn tại. ");
    }
    const productUpdate = { ...product[0], ...productReq }
    await updateProductById(productUpdate, productId)
    res.status(200).json({
        message: 'success',
        data: productUpdate
    });
}
const deleteProduct = (req, res) => {
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


module.exports = { getProductsBycategory, getProductById, createProduct, updateProducts, deleteProduct, getAllProduct, getProductApi }