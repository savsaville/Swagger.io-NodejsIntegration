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
    type: String
  },
  cycles: {
    type: Number
  },
  powerConsumption: {
    type: Number
  },
  location: {
    type: String
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})


const Washmachine = mongoose.model('Washmachine', washmachineSchema);

module.exports = Washmachine;
