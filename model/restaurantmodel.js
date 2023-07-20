var mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema([{
    id:  String,
    name: String,
    city_name: String,
    city: String,
    area: String,
    locality: String,
    cost: String,
    contact_number: String,
    address: String,
    type: ([{
        type_no: String, 
        meal_type: String
          }]),
    Cuisine: ([{
        cuisine_no: String, 
        cuisine_type: String
    }])     
}]);

var restaurants = mongoose.model("restaurants", restaurantSchema);

module.exports = restaurants;