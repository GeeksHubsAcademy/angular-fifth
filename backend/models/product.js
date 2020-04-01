'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      allowNull: false,//required validación del modelo
      type: DataTypes.STRING
    },
    price: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    image_path: DataTypes.STRING,
    avaliable:DataTypes.BOOLEAN,
  }, {});
  Product.associate = function (models) {
    Product.belongsTo(models.Category,{ onDelete: 'cascade' });
    Product.belongsToMany(models.Order,{
      through:models.OrderProduct
    });//MANY TO MANY Relationship
  };
  return Product;
};