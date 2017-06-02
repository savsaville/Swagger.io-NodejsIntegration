const mongoose = require('mongoose');
//destructuring
const { Schema } = mongoose;

// const LocationDetails = require('./LocationDetails')

const washmachineSchema = new Schema ({
  machineName: {
    type: String,
    trim: true
  },
  size: {
    type: String,
  },
  cycles: {
    type: Number,
  },
  powerConsumption: {
    type: Number,
  },
  location: {
    type: String,
    ref: 'LocationDetails'
  }
})


const Washmachine = mongoose.model('Washmachine', washmachineSchema);

const LocationDetails = mongoose.model('LocationDetails', locationDetailsSchema);

module.exports = Washmachine;
