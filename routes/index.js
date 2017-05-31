var express = require('express');
var router = express.Router();
const Washmachine = require('../models/Washmachine');
const washmachineController = require('../controllers/washmachineController')

/* GET home page. */
router.get('/', washmachineController.getWashmachines);
router.get('/api', washmachineController.getApiWashmachines);

router.post('/', washmachineController.createWashmachines);
router.post('/api', washmachineController.createApiWashmachines);

router.get('/washmachines/:id/edit', washmachineController.editWashmachines);


router.post('/washmachines/:id/edit', washmachineController.updateWashmachines);





module.exports = router;
