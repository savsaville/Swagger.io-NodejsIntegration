const mongoose = require('mongoose');
const Washmachine = require('../models/Washmachine');

exports.getWashmachine = (req, res) => {
Washmachine.find()
  .then((washmachines) => {
    res.render('index', {
      title: 'Washmachines',
      washmachines: washmachines
    })
  })
};
