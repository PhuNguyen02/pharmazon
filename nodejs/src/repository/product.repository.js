const connection = require("../config/database.config");

let findProductsBycategory = (category) => {
    const query = "SELECT * from products WHERE category = '"+ category+"'"
    console.log("category: ",query);
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
           
        });
    })
};

let findAllProducts = (params) => {
    let query = "SELECT title, category, SKU, quantityOfUnit, price from products  WHERE is_actived = 1 ";
    query+= " LIMIT "+ params.limit +" OFFSET "+ params.offset
    console.log("AllPrd: ",query);
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if(err) {
                return reject(err)
            }
            resolve(result)
        })
    })
}

let findProductApi = (params)=> {
    let query = "SELECT id, title, quantityOfStock, price from products Where is_actived = 1";
    return new Promise((resolve, reject) => {
        connection.query(query,(err, result)=> {
            if(err) {
                return reject(err)
            }
            resolve(result)
        })
    })
}

let findAllProductsCount = (params) => {
    let query = "SELECT COUNT(id) FROM products WHERE is_actived = 1 ";
    console.log(query);
    return new Promise((resolve, reject) => {
        connection.query(query,(err, result)=> {
            if(err) {
                return reject(err)
            }
            resolve(result)
        })
    })
}

let insertProduct = (product) => {
    let query = "INSERT INTO products (img,title,price,unit,quantityofunit,des,quantityOfStock,category,discount,SKU) VALUES " + "('" +product.img+ "','"+product.title+"','"+product.price+"','"+product.unit+"','"+product.quantityofunit+"','"+product.des+"','"+product.quantityOfStock+"','"+product.category+"','"+product.discount+"','"+product.SKU+"');";
    console.log("add: ",query);
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if(err) {
                return reject(err)
            }
            resolve(result)
        })
    })
}
let findById=(id)=>{
    let query = "SELECT * FROM products WHERE id="+ id;
    console.log("findid: ",query);
    return new Promise((resolve, reject) => {
        connection.query(query,(err, result)=> {
            if(err) {
                return reject(err)
            }
            resolve(result)
        })
    })
}
let updateProductById = (product,productId) => {
    let query = ` UPDATE products SET img = '${product.img}',title = '${product.title}', price = '${product.price}',unit = '${product.unit}', quantityofunit = '${product.quantityofunit}',des = '${product.des}',quantityOfStock = '${product.quantityofstock}', category = '${product.category}'
    WHERE id = ${productId}
`
console.log("update: ",query);
return new Promise((resolve, reject) => {
    connection.query(query,(err, result)=> {
        if(err) {
            return reject(err)
        }
        resolve(result)
    })
})
}
module.exports = { findProductsBycategory,findAllProducts,insertProduct,updateProductById,findById,findAllProductsCount, findProductApi }