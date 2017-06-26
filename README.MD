# How to implement Swagger.io into an existing code base

1. Install swagger-jsdoc
https://www.npmjs.com/package/swagger-jsdoc
```
$ npm install swagger-jsdoc --save
```
2. Require swagger-jsdoc into app.js
```
var swaggerJSDoc = require('swagger-jsdoc');
```
3. Add spec-skeleton to app.js. This sets up the route "/api-docs.json" which automatically updates when the annotated routes and models are updated. The contents in this route can then be copy and pasted into the Swagger.io editor to generate the interactive document. Please note, the "automation" happens in the 'var options' section so ensure that the the 'apis:' is referencing the files where the annotated swagger code is.  
```js
// Swagger definition
// You can set every attribute except paths and swagger
// https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md
var swaggerDefinition = {
  info: { // API informations (required)
    title: 'Hello World', // Title (required)
    version: '1.0.0', // Version (required)
    description: 'A sample API', // Description (optional)
  },
  host: 'localhost:3000', // Host (optional)
  basePath: '/', // Base path (optional)
};

// Options for the swagger docs
var options = {
  // Import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // Path to files that contain the annotated API docs
  apis: ['./example/routes*.js', './example/parameters.yaml'],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
var swaggerSpec = swaggerJSDoc(options);

// Serve swagger docs the way you like (Recommendation: swagger-tools)
app.get('/api-docs.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
```

4. Annotate routes. Here are some examples of annotated routes.
Be sure to add "-in" type according to your request. It may be body, query or param.
```js
/**
   * @swagger
   * /api:
   *   get:
   *     tags: [washmachine]
   *     description: Lists washingmachines
   *     responses:
   *       400:
   *         description: Success
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
   *         description: success
   *         schema:
   *           type: object
   *           $ref: '#/definitions/washmachine'
   *
   */


router.post('/api', (req, res) => {
const machineName = req.query.machineName;
const cycles = req.query.cycles;
const size = req.query.size;
const powerConsumption = req.query.powerConsumption;
const location = req.query.location;
const createdAt = req.query.createdAt;
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
   *       400:
   *         description: Success
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
```
5. Vist www.(url)/api-docs.json and copy and paste the json content into the swagger editor and it will automatically convert to yaml and create the interactive documentation.

If you want to use this repo follow installation:
```
$ git clone https://github.com/Mobecom/JSDoc-Swagger-Washywashy
$ npm install
$ npm start
visit localhost:3000/api-docs.json to view the spec
```

#### References
https://github.com/Surnet/swagger-jsdoc/blob/master/docs/GETTING-STARTED.md
http://swaggerhub.com/wp-content/uploads/2017/02/Documenting-An-Existing-API-with-Swagger-2.pdf
