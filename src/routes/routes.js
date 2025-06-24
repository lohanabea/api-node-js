const express = require('express'); 
const router = express.Router(); 

const RotasLohana= require('./routes-lohana'); 

router.use ('/', RotasLohana)



module.exports = router;