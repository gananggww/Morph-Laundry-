'use strict';
module.exports = function(sequelize, DataTypes) {
  var Stuff = sequelize.define('Stuff', {
    type: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Stuff;
};