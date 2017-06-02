const mongoose = require('mongoose');
const LocationDetails = require('../models/LocationDetails');

exports.getLocationDetails = (req, res) => {
LocationDetails.find()
  .then((locationdetails) => {
    res.render('index', {
      title: 'LocationDetails',
      locationdetails: locationdetails
    })
  })
};

exports.createLocationDetails = (req, res) => {
const locationName = req.body.locationName;
const numberOfWashers = req.body.numberOfWashers;
const numberOfDryers = req.body.numberOfDryers;
const ownerName = req.body.ownerName;
const machines = req.body.LocationDetails_machines;
let locationDetails = new LocationDetails();
locationdetails.locationName = locationName;
locationdetails.numberOfWashers = numberOfWashers;
locationdetails.numberOfDryers = numberOfDryers;
locationdetails.ownerName = ownerName;
locationdetails.machines = machines;
locationdetails.save()
  .then(() => {
    res.redirect('/')
  })
};
