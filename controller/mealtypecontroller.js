var mealtypeSchema = require('../model/mealtypemodel');

async function addmealtype(req, res) {
    try {
           const {meal_type, name, content}= req.body;

      // Create a new instance of your Mongoose model with the JSON data
           const newRecord = new mealtypeSchema({
                meal_type,
                name,
                content
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
  
  async function getmealtype(req, res) {
    try {
      const getmealtype = await mealtypeSchema.find();
      res.status(200).json(getmealtype);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while retrieving the data.' });
    }
   }

   module.exports = { addmealtype, getmealtype }