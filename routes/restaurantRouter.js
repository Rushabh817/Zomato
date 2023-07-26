var express = require('express');
var router = express.Router();
var { getAllRestaurants, addRestaurant,  getRestaurantByName, updateCityName, deleteRestaurantByName}  = require('../controller/restaurantcontroller');


router.get('/', getAllRestaurants);

router.get('/getAllRestaurants', getAllRestaurants);

router.get('/getRestaurantByName', getRestaurantByName); //Dynamic Routing

router.post('/addRestaurant', addRestaurant);

router.put('/updateCityName', updateCityName);

router.delete('/deleteRestaurantByName', deleteRestaurantByName);

module.exports = router;
