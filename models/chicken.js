const mongoose = require('mongoose');

const chickenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  birthday: {
    type: Date
  },
  weight: {
    type: Number,
    required: true
  },
  steps: {
    type: Number,
    default: 0
  },
  isRunning: {
    type: Boolean,
    default: false
  },
  farmyard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farmyard'
  }
});

const Chicken = mongoose.model('Chicken', chickenSchema);

module.exports = Chicken;
