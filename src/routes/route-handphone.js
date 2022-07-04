const router = require('express').Router();
const {
    handphone
} = require('../controllers');

// GET localhost:8080/handphone =› Ambil data semua handphone
router.get('/handphone', handphone.getDataHandphone);

// GET localhost:8080/handphone/2=›Ambildatasemuahandphoneberda
router.get('/handphone/:id', handphone.getDataHandphoneByID);

// POST localhost:8080/handphone/add=›Tambahdatahandphonekedatat
router.post('/handphone/add', handphone.addDataHandphone);

// POST localhost:8080/handphone/2=›Edit data handphone
router.post('/handphone/edit', handphone.editDataHandphone);

// POST localhost:8080/handphone/delete=>Delete data handphone
router.post('/handphone/delete/', handphone.deleteDataHandphone);

module.exports = router;
