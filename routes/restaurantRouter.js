var express = require('express');
var router = express.Router();
var { getAllRestaurants, addRestaurant,  getRestaurantByName}  = require('../controller/restaurantcontroller');


router.get('/', getAllRestaurants);

router.get('/getAllRestaurants', getAllRestaurants);

router.get('/getRestaurantByName', getRestaurantByName); //Dynamic Routing

router.post('/addRestaurant', addRestaurant);

module.exports = router;
