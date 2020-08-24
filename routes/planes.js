var express = require('express');
var router = express.Router();
const planesCtrl = require('../controllers/planes')

router.get('/new', planesCtrl.new)
router.post('/', planesCtrl.create)
router.get('/', planesCtrl.index)
router.get('/:id', planesCtrl.show)

module.exports = router;
