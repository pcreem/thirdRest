'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    UserId: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Restaurant)
  };
  return User;
};