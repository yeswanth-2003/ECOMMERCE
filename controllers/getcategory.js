const Categorys = require('../models/categoryschema');

const getallcategorys = async (req, res) => {
    try {
        const categorys = await Categorys.find();
        const result = []; 
        categorys.forEach((category) => {
            if (category.parent === null) {
                result.push(category.name); 
            }
        });
        res.status(200).json(result); 
    } catch (error) {
        res.status(500).json({ message: "something went wrong", error });
    }
}

module.exports = getallcategorys;