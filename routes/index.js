var express = require('express');
var router = express.Router();
const Washmachine = require('../models/Washmachine');
const washmachineController = require('../controllers/washmachineController')
/* GET home page. */
router.get('/', washmachineController.getWashmachines);




module.exports = router;
