const checkLogin = (req, res, next) =>{
    console.log("API 1")
    const isLogin = false
    if(isLogin){
        next();
    }else{
        res.json("Chua dang nhap  ")
    }
} 

module.exports = checkLogin