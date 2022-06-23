'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserProfile.belongsTo(models.User)
    }
  }
  UserProfile.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: 'Masukkan Firstname' },
        is: { args: ["^[a-zA-Z0-9_.-]*$", 'i'], msg: 'Firstname tidak boleh mengandung simbol' }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: 'Masukkan Lastname' },
        is: { args: ["^[a-zA-Z0-9_.-]*$", 'i'], msg: 'Lastname tidak boleh mengandung simbol' }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: 'Masukkan Phone Number' },
        is: { args: ["^[a-zA-Z0-9_.-]*$", 'i'], msg: 'Phone Number tidak boleh mengandung simbol' }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: 'Masukkan Alamat dengan benar' },
      }
    }
  }, {
    sequelize,
    modelName: 'UserProfile',
  });
  return UserProfile;
};