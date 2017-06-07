// const mongoose = require('mongoose');
// const LocationDetails = require('../models/LocationDetails');
// const Washmachine = require('../models/Washmachine');
//
// exports.getLocationDetails = (req, res) => {
// let locationDetails;
//
// LocationDetails.find()
//   .then((locationDetails) => {
//     Washmachine.find()
//     .then((washmachines) => {
//       res.render('index', {
//         title: 'Location Details',
//         locationDetails: locationDetails,
//         washmachines: washmachines
//       })
//   })
//   })
// };
//
// exports.createLocationDetails = (req, res) => {
// const {
//   locationName,
//   numberOfWashers,
//   numberOfDryers,
//   ownerName,
//   machines
// } = req.body;
// let locationDetails = new LocationDetails();
// locationDetails.locationName = locationName;
// locationDetails.numberOfWashers = numberOfWashers;
// locationDetails.numberOfDryers = numberOfDryers;
// locationDetails.ownerName = ownerName;
// locationDetails.machines = machines;
// locationDetails.save()
//   .then(() => {
//     res.redirect('/')
//   })
// };
