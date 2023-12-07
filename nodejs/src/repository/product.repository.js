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
    const query = "SELECT title, category, SKU, quantityOfUnit, price from products";
    console.log("AllPrd: ",query);
    // query+= " LIMIT "+ params.limit +" OFFSET "+ params.offset
    // console.log();
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if(err) {
                return reject(err)
            }
            resolve(result)
        })
    })

}
module.exports = { findProductsBycategory,findAllProducts }