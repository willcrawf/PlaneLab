var express = require('express');
var router = express.Router();
const destinationsCtrl = require('../controllers/destinations')


router.post('/planes/:id', destinationsCtrl.create)

module.exports = router;