'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('products', [{
      "id": 1,
      "name": "AK-47",
      "price": 5500,
      "CategoryId": 2,
      "amount": 5,
      "image_path": "https://upload.wikimedia.org/wikipedia/commons/f/f6/AK-47_assault_rifle.jpg",
      "avaliable": false,
      "createdAt": "2020-03-27T12:11:55.000Z",
      "updatedAt": "2020-03-27T12:11:55.000Z",
    }, {
      "id": 2,
      "name": "MP-40",
      "price": 6500,
      "CategoryId": 2,
      "amount": 20,
      "image_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/MP_40_AYF_3.JPG/1920px-MP_40_AYF_3.JPG",
      "avaliable": false,
      "createdAt": "2020-03-27T12:12:51.000Z",
      "updatedAt": "2020-03-27T12:12:51.000Z",
    }, {
      "id": 3,
      "name": "CAR GUN de Maite",
      "price": 5999,
      "CategoryId": 2,
      "amount": 1,
      "image_path": "https://c4.wallpaperflare.com/wallpaper/600/19/788/pink-assault-rifle-scar-wallpaper-preview.jpg",
      "avaliable": false,
      "createdAt": "2020-03-27T12:15:03.000Z",
      "updatedAt": "2020-03-27T12:15:03.000Z",
    }, {
      "id": 4,
      "name": "Thompson GUN de Alex",
      "price": 6999,
      "CategoryId": 2,
      "amount": 30,
      "image_path": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Campbell_Thompson.jpg",
      "avaliable": false,
      "createdAt": "2020-03-27T12:16:14.000Z",
      "updatedAt": "2020-03-27T12:16:14.000Z",
    }, {
      "id": 5,
      "name": "Funko Harry Potter",
      "price": 35,
      "CategoryId": 1,
      "amount": null,
      "image_path": "https://images-na.ssl-images-amazon.com/images/I/51G4rxffNiL._AC_.jpg",
      "avaliable": null,
      "createdAt": "2020-04-03T11:40:39.000Z",
      "updatedAt": "2020-04-03T11:40:39.000Z",
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('products', null, {});
  }
};