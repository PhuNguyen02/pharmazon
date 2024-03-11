const connection = require("../config/database.config");

let getUsers = (username, password) => {
    const query = `
        SELECT a.*, r.name AS role_name
        FROM account a
        INNER JOIN role r ON a.role_id = r.id
        WHERE a.username = '${username}' AND a.password = '${password}'
    `;
    console.log(query);
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    })
};

let getUser = (username) => {
    const query = "SELECT * from account WHERE username = '"+ username+"'"
    console.log(query);
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    })
};

let findAllUsers = (params) => {
    let query = "SELECT id,  full_name, username, email, phone FROM account ";
    // if(params.email){
    //     query+= " AND email = "+"'" + params.email + "'";
    // } 
    // if(params.userName){
    //     query+= " AND username = "+"'" + params.userName + "'";
    // }
    // if(params.fullname){
    //     query+= " AND full_name LIKE '%"+params.fullname+"%'";
    // } 
    return new Promise((resolve, reject) => {
        connection.query(query,(err, result)=> {
            if(err) {
                return reject(err)
            }
            resolve(result)
        })
    })
}
let findAllUsersCount = (params) => {
    let query = "SELECT COUNT(id) FROM account WHERE ";
    if(params.email){
        query+= " AND email = "+"'" + params.email + "'";
    } 
    if(params.fullname){
        query+= " AND full_name = "+"'" + params.fullname + "'";
    }
    return new Promise((resolve, reject) => {
        connection.query(query,(err, result)=> {
            if(err) {
                return reject(err)
            }
            resolve(result)
        })
    })
}

let findById=(id)=>{
    let query = "SELECT * FROM account WHERE id= "+id;
    return new Promise((resolve, reject) => {
        connection.query(query,(err, result)=> {
            if(err) {
                return reject(err)
            }
            resolve(result)
        })
    })
}

let insertUser = (user) => {
    let query = 
    "INSERT INTO account (full_name,email,password,username ) VALUES "
     + "('" + user.fullname + "','" +user.email+ "','" +user.password+ "');";
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

let updateUserById = (user, userId)  => {
    let query = `
        UPDATE account
        SET username = '${user.userName}',
            email = '${user.email}',
            password = '${user.password}'
        WHERE id = ${userId}
    `

    return new Promise((resolve, reject) => {
        connection.query(query,(err, result)=> {
            if(err) {
                return reject(err)
            }
            resolve(result)
        })
    })
}


let deleteUserById =  (userId) => {
    let  query = "DELETE FROM account WHERE id = " + userId  ;
    return new Promise((resolve, reject) => {
        connection.query(query,(err, result)=> {
            if(err) {
                return reject(err)
            }
            resolve(result)
        })
    })
}

module.exports = { getUsers , findAllUsers, findById, insertUser, updateUserById , deleteUserById , findAllUsersCount,getUser}