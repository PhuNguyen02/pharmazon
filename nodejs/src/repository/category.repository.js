const connection = require("../config/database.config");

let findAllCategory = () => {
    const query = "SELECT category_code, category_name from category";
    console.log("AllCate: ",query);
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if(err) {
                return reject(err) 
            }
            resolve(result)
        })
    })
}


let findAllCategories = () => {
    const query = "SELECT * FROM product_categories";
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if(err) {
                return reject(err) 
            }
            resolve(result)
        })
    })
}

let findChildrenOfCategory = (parentId) => {
    const query = `SELECT pc.id, pc.name, pc.parent_id, parent.name AS parent_name
    FROM product_categories pc
    LEFT JOIN product_categories parent ON pc.parent_id = parent.id
    WHERE pc.parent_id= ${parentId}`  ;
    console.log("childrent: ",query);
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if(err) {
                return reject(err) 
            }
            resolve(result)
        })
    })
}
module.exports = {findAllCategory,findAllCategories,findChildrenOfCategory}