var express = require('express');
var router = express.Router();
const Washmachine = require('../models/Washmachine');
const washmachineController = require('../controllers/washmachineController');

router.get('/', washmachineController.getWashmachines);

/**
   * @swagger
   * /api:
   *   get:
   *     tags: [washmachine]
   *     description: Lists WASHINGMACHINES
   *     responses:
   *       200:
   *         description: You can see the machines
   */

router.get('/api', (req, res) => {
Washmachine.find()
.then((washmachines) => {
  res.json(washmachines)
    })
  });


/**
   * @swagger
   * definitions:
   *   washmachine:
   *     required:
   *       - machineName
   *     properties:
   *       machineName:
   *         type: string
   *       size:
   *         type: string
   *       cycles:
   *         type: integer
   *         format: int64
   *       location:
   *         type: string
   *       powerConsumption:
   *         type: integer
   *         format: int64
   *       createdAt:
   *         type: string
   *         format: date
   *
   */

  /**
   * @swagger
   * tags:
   *   name: washmachine
   *   description: Washmachine Database
   */

  /**
   * @swagger
   * /api:
   *   post:
   *     description: add washmachine to db
   *     tags: [washmachine]
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: query
   *         name: machineName
   *         description: name of machine
   *         required: true
   *         type: string
   *       - in: query
   *         name: size
   *         description: size of machine
   *         type: string
   *       - in: query
   *         name: cycles
   *         description: number of cycles per day
   *         type: integer
   *         format: int64
   *       - in: query
   *         name: powerConsumption
   *         description: Power consumption per day
   *         type: integer
   *         format: int64
   *       - in: query
   *         name: location
   *         description: location of laundromat
   *         type: string
   *       - in: query
   *         name: createdAt
   *         description: time of information added
   *         type: string
   *         format: date
   *     responses:
   *       200:
   *         description: Successfully added Machine
   *         schema:
   *           type: object
   *           $ref: '#/definitions/washmachine'
   *
   */


router.post('/api', (req, res) => {
  const {
    machineName,
    cycles,
    size,
    powerConsumption,
    location,
    createdAt
  }
 = req.query;
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
});



/**
   * @swagger
   * /api/washmachines/{id}:
   *   delete:
   *     tags: [washmachine]
   *     produces:
   *       - application/json
   *     description: Deletes a machine
   *     parameters:
   *      - name: id
   *        in: path
   *        required: true
   *        type: string
   *     responses:
   *       200:
   *         description: Deleted Machine
   *       400:
   *         description: Invalid Error
   */



router.delete('/api/washmachines/:id',function(req, res){
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
});


router.get('/washmachines/:id/edit', washmachineController.editWashmachines);
router.get('/api/:id', washmachineController.getWashmachineApi);


router.post('/washmachines/:id/edit', washmachineController.updateWashmachines);
router.post('/api/:id/edit', washmachineController.updateApiWashmachines);


// router.get('/washmachine/:id/delete', washmachineController.deleteWashmachines);








module.exports = router;
