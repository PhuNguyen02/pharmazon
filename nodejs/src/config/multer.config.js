const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/images/");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const date = new Date().toISOString().split("T")[0];
    const getTime = new Date().getTime();

    cb(null, date + "_" + getTime + "_" + file.originalname);
  },
});

exports.upload = multer({ storage: storage });


const storage2 = multer.memoryStorage()
exports.multerConfig = multer({ storage: storage2 });