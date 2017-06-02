const mongoose = require('mongoose');
//destructuring
const { Schema } = mongoose;

const locationDetailsSchema = new Schema ({
  locationName: {
    type: String,
    trim: true
  },
  numberOfWashers: {
    type: Number,
  },
  numberOfDryers: {
    type: Number,
  },
  ownerName: {
    type: String,
    trim: true
  },
  machines: [{
    type: Schema.Types.ObjectId,
    ref: 'Washmachine'
  }]
})

const LocationDetails = mongoose.model('LocationDetails', locationDetailsSchema);

const Washmachine = mongoose.model('Washmachine', washmachineSchema);


module.exports = LocationDetails;
