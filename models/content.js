'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.content.hasMany(models.favorites, {foreignKey:'contentsId', sourceKey:'id'})
    }
  };
  content.init({
    imgPath: DataTypes.STRING,
    thumbnailPath: DataTypes.STRING,
    audioPath: DataTypes.STRING,
    abstract: DataTypes.STRING,
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    weather: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'content',
  });
  return content;
};