const express = require("express");
const router = express.Router();
const {getAllCategory,getAllCategories,getChildrenOfCategory} = require("../controllers/category.controller");

router.get('/allcategory',getAllCategory)
router.get('/allcategories/',getAllCategories)
router.get('/allcategories/:parentId/children',getChildrenOfCategory)

module.exports = router