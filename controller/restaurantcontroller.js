var restaurantSchema = require('../model/restaurantmodel');

async function addRestaurant(req, res) {
    try {
           const {id, name, city_name, city, area, locality, cost, contact_number, address, type, Cuisine}= req.body;

      // Create a new instance of your Mongoose model with the JSON data
           const newRecord = new restaurantSchema({
                 id,
                 name,
                 city_name,
                 city,
                 area,
                 locality,
                 cost,
                 contact_number,
                 address,
                 type,
                 Cuisine
    });
      // Save the new record to the database

            const savedRecord = await newRecord.save();
            res.status(200).json(savedRecord);
         }

    catch (error) {
                      console.error(error);
                      res.status(500).json({ error: 'An error occurred while saving the data.' });
    }
  }
  


//addRestaurant = (req, res, next) => {
//   var restaurantToAdd = new restaurantSchema({
//      id: req.body.id,
//      name : req.body.name,
//      city_name: req.body.city_name,
//      city: req.body.city,
//       area: req.body.area,
//      locality : req.body.locality,
//      cost: req.body.cost,
//      address: req.body.address
//  })
// restaurantToAdd.save((err, response) => {
//     if(err)
//         res.send({"message": "Exception Occurred", "error": err})
//     else
//         res.send({"Status": "200", "response": response });
//   });
// }

async function getAllRestaurants(req, res) {
  try {
    const getAllRestaurants = await restaurantSchema.find();
    res.status(200).json(getAllRestaurants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving the data.' });
  }
 }


//getAllRestaurants = (req, res, next) => {
//    restaurantSchema.find((err, response) => {
//        if(err)
//            res.send({"message": "Exception Occurred", "response": err})
//       else
//           res.send({"status": "200", "response": response});
//   })
// }

async function getRestaurantByName(req, res) {
  try {
    const { name } = req.query;

    // Find the restaurant by name
    const restaurant = await restaurantSchema.find({ name });

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    res.status(200).json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the restaurant data.' });
  }
}

//getRestaurantByName = (req, res, next) => {
//  restaurantSchema.find({"name": req.params.name }, (err, response) => {
//      if(err)
//          res.send({"message": "Exception Occurred", "response": err})
//      else
//          res.send({"status": "200", "response": response});
//      })    
// }

module.exports = { addRestaurant, getAllRestaurants, getRestaurantByName }