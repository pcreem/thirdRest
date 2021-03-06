'use strict'
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    tel: DataTypes.STRING,
    address: DataTypes.STRING,
    opening_hours: DataTypes.STRING,
    description: DataTypes.TEXT,
    UserId: DataTypes.STRING,
    image: DataTypes.STRING
  }, {})
  Restaurant.associate = function (models) {
    Restaurant.belongsTo(models.User)
  }
  return Restaurant
}