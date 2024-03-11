// const connection = require("../config/database.config");

// let findAllProductsInCart = (params) => {
//     const query = "SELECT title, category, SKU, quantityOfUnit, price from products";
//     console.log("AllPrd: ",query);
//     // query+= " LIMIT "+ params.limit +" OFFSET "+ params.offset
//     // console.log();
//     return new Promise((resolve, reject) => {
//         connection.query(query, (err, result) => {
//             if(err) {
//                 return reject(err)
//             }
//             resolve(result)
//         })
//     })
// }

// let insertProductToCart = (product) => {
//     let query = "INSERT INTO cart_items (quantity) VALUES " + "();";
//     console.log("add: ",query);
//     return new Promise((resolve, reject) => {
//         connection.query(query, (err, result) => {
//             if(err) {
//                 return reject(err)
//             }
//             resolve(result)
//         })
//     })
// }
// let findProductInCartById=(id)=>{
//     let query = "SELECT * FROM cart_items WHERE id="+ id;
//     console.log("findidcart: ",query);
//     return new Promise((resolve, reject) => {
//         connection.query(query,(err, result)=> {
//             if(err) {
//                 return reject(err)
//             }
//             resolve(result)
//         })
//     })
// }

// module.exports = { findProductsBycategory,findAllProducts,insertProduct,updateProductById,findById }