'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User)
      Order.belongsTo(models.Product)
    }
  }
  Order.init({
    orderNumber: { 
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notEmpty: {msg: 'Masukkan Stock'},
        isInt: {msg: 'Harus Integer'}
      }
    },
    amount: { 
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notEmpty: {msg: 'Masukkan Amount'},
        isInt: {msg: 'Harus Integer'}
      }
    },
    quantity: { 
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notEmpty: {msg: 'Masukkan Quantity'},
        isInt: {msg: 'Harus Integer'}
      }
    },
    shippingAddress: { 
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty: {msg: 'Masukkan name'}
      }
    },
    status: DataTypes.BOOLEAN,
    UserId:DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};

