var mongoose = require('mongoose');

const mealtypeSchema = mongoose.Schema([{
    meal_type: String,
    name: String,
    content: String
}]);

var mealtype = mongoose.model("mealtype", mealtypeSchema);

module.exports = mealtype;