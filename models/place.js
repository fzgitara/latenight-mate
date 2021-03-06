'use strict';
module.exports = (sequelize, DataTypes) => {
  var Place = sequelize.define('Place', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    priceRange: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  }, {});
  Place.associate = function(models) {
    Place.belongsToMany(models.User, {
      through: 'UserPlace',
      foreignKey: 'placeId',
      otherKey: 'userId'
    })
    Place.belongsToMany(models.Genre, {
      through: 'GenrePlace',
      foreignKey: 'placeId',
      otherKey: 'genreId'
    })
  };
  return Place;
};
