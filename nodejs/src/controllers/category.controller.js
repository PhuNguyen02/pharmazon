const fs = require('fs');
const { findAllCategory,findAllCategories,findChildrenOfCategory } = require('./../repository/category.repository');
const { get } = require('http');

const getAllCategory = async(req, res) => {
    let params = {
        name_category: req.query.name_category,
    }
    
    let categories = await findAllCategory();
    res.status(200).json({
        categories
    }) 
}

const getAllCategories = async(req, res) => {
    let categories = await findAllCategories();
    res.status(200).json({
        categories
    }) 
}


const getChildrenOfCategory = async(req, res) => {
    const { parentId } = req.params;
    try{
        const children = await findChildrenOfCategory(parentId);
        res.json({
            status:200,
            children
        }) 
    } catch {
        res.status(400).json({
            status:400,
            messsage:"error"
        }) 
    }
   
}

module.exports = {getAllCategory,getAllCategories,getChildrenOfCategory }