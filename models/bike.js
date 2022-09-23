const { model, Schema } = require('mongoose');

const BikeSchema = new Schema({
  name: String,
  make: String,
  model: String,
  year: String,
  registryNumber: String,
});

const Bike = model('Bike', BikeSchema);

module.exports = {
  Bike,
  BikeSchema,
}
