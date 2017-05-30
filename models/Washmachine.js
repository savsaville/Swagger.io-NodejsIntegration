const mongoose = require('mongoose');
//destructuring
const { Schema } = mongoose;

const washmachineSchema = new Schema ({
  name: {
    type: String,
    trim: true
  },
  size: {
    type: String,
  },
  cycles: {
    type: Number,
  }
})


const Washmachine = mongoose.model('Washmachine', washmachineSchema);

module.exports = Washmachine;
