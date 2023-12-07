const connection = require("../config/database.config");

let getUsers = (email, password) => {
    const query = "SELECT * from users WHERE email = '"+ email+"' AND password ='"+ password+"'"
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
           
        });
    })
};

module.exports = { getUsers }