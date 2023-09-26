const express = require('express')
const router = express.Router();

// const Thing = require('../models/Thing.js')

const stuffCtrl = require('../controllers/stuff.js')

router.post('/', stuffCtrl.createThing)

router.put('/:id', stuffCtrl.modifyThing);

router.delete('/:id', stuffCtrl.deleteThing);

router.get('/:id', stuffCtrl.getOneThing);

router.get('/', stuffCtrl.getAllThing);

module.exports = router;