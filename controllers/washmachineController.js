const mongoose = require('mongoose');
const Washmachine = require('../models/Washmachine');

/* GET */

exports.getWashmachines = (req, res) => {
Washmachine.find()
  .then((washmachines) => {
    res.render('index', {
      title: 'Washmachines',
      washmachines: washmachines
    })
  })
};

exports.getApiWashmachines = (req, res) => {
Washmachine.find()
  .then((washmachines) => {
    res.json(washmachines)
  })
};

exports.createWashmachines = (req, res) => {
const machineName = req.body.washmachine_machineName;
const cycles = req.body.washmachine_cycles;
const size = req.body.washmachine_size;
const powerConsumption = req.body.washmachine_powerConsumption;
const location = req.body.washmachine_location;
const createdAt = req.body.washmachine_createdAt;
let washmachine = new Washmachine();
washmachine.machineName = machineName;
washmachine.cycles = cycles;
washmachine.size = size;
washmachine.powerConsumption = powerConsumption;
washmachine.location = location;
washmachine.createdAt = createdAt;
washmachine.save()
  .then(() => {
    res.redirect('/')
  })
};

exports.createApiWashmachines = (req, res) => {
const machineName = req.query.machineName;
const cycles = req.query.cycles;
const size = req.query.size;
let washmachine = new Washmachine();
washmachine.machineName = machineName;
washmachine.cycles = cycles;
washmachine.size = size;
washmachine.powerConsumption = powerConsumption;
washmachine.location = location;
washmachine.createdAt = createdAt;
washmachine.save()
  .then(() => {
    res.json(washmachine)
  })
};

exports.editWashmachines = (req, res) => {
  Washmachine.findOne({ _id: req.params.id })
    .then(washmachine => {
      res.render('editWashmachine', {washmachine: washmachine});
    })
};

exports.getWashmachineApi = (req, res) => {
  Washmachine.findOne({ _id: req.params.id })
    .then(washmachine => {
      res.json(washmachine);
    })
};


exports.updateWashmachines = (req, res) => {
  Washmachine.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true //returns new washmachine
  })
      .then(washmachine => {
        res.redirect('/')
      })
}

exports.updateApiWashmachines = (req, res) => {
  Washmachine.findOneAndUpdate({ _id: req.params.id }, req.query, {
    new: true //returns new washmachine
  })
      .then(washmachine => {
        res.redirect(`/api/${req.params.id}`)
      })
}

exports.deleteWashmachines = (req, res) => {
	Washmachine.findByIdAndRemove({_id: req.params.id},
	   function(err){
		if(err) res.json(err);
		else    res.redirect('/');
	});
};

exports.deleteWashmachineApi = function(req, res){
	Washmachine.findByIdAndRemove({_id: req.params.id},
	   function(err){
		if(err) res.json(err);
		else {
      Washmachine.find()
        .then(washmachine => {
          res.json(washmachine)
        })
    };
	});
};
