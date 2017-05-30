var express = require('express');
var router = express.Router();
const Washmachine = require('../models/Washmachine');
const washmachineController = require('../controllers/washmachineController')
/* GET home page. */
router.get('/', washmachineController.getWashmachine);




module.exports = router;
