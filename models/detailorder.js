'use strict';
module.exports = function(sequelize, DataTypes) {
  var detailOrder = sequelize.define('detailOrder', {
    clientId: DataTypes.INTEGER,
    stuffId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return detailOrder;
};