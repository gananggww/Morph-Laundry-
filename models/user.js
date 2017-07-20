'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    nama: DataTypes.STRING,
    telp: DataTypes.INTEGER,
    alamat: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};