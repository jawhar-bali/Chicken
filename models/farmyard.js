const mongoose = require('mongoose');

const farmyardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});

const Farmyard = mongoose.model('Farmyard', farmyardSchema);

module.exports = Farmyard;
