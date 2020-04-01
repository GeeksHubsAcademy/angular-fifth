const { Product, Category,Sequelize } = require('../models/index.js')
const { Op } =Sequelize;
const ProductController = {
    getAll(req,res){
        Product.findAll({
            include:[Category]
        })
        .then(products=>res.send(products))
    },
    insert(req,res){
        Product.create({...req.body})
        .then(product=>res.send(product))
    },
    getOneByName(req,res){
        Product.findAll({//SELECT * FROM products WHERE name LIKE %req.params.name%
            where:{
                name:{
                    [Op.like]:`%${req.params.name}%`
                }
            },
            include:[Category]
        })
        .then(products=>res.send(products))
    }
}
module.exports = ProductController;