const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { storageFirebase } = require("../configs/firebase.config");
const { multerConfig } = require("../configs/multer.config");

const uploadFile = async (req, res, next) => {
//   multerConfig.single("image");
  const file = req.file;
  const metatype = { contentType: file.mimetype, name: file.originalname };

  const storageRef = ref(storageFirebase, "images/" + file.originalname);

  // 'file' comes from the Blob or File API
  try {
    await uploadBytes(storageRef, file.buffer, metatype);
    const url = await getDownloadURL(storageRef);

    req.body.imageUrl = url;
    next();
  } catch (error) {
    console.log("error", error);
  }
};

exports.uploadFile = uploadFile;