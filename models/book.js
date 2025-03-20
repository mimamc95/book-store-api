'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { arg: true, msg: 'title is required' },
        notNull: { arg: true, arg: 'title is required' }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { arg: true, msg: ' description is required' },
        notNull: { arg: true, msg: ' description is required' },
      }
    }
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};