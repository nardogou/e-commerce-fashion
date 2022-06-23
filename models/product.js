'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Order)
      Product.belongsTo(models.Category)
    }
  }
  Product.init({
    name: { 
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty: {msg: 'Masukkan name'}
      }
    },
    description: { 
      type: DataTypes.TEXT,
      allowNull:false,
      validate:{
        notEmpty: {msg: 'Masukkan Description'},
        len: {args: [6, 12], msg: 'Panjang password harus 8-12 karakter'}
      }
    },
    price: { 
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notEmpty: {msg: 'Masukkan Price'},
        isInt: {msg: 'Harus Integer'}
      }
    },
    stock: { 
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notEmpty: {msg: 'Masukkan Stock'},
        isInt: {msg: 'Harus Integer'}
      }
    },
    image: { 
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty: {msg: 'Masukkan Image'}
      }
    },
    CategoryId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};