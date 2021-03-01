const expres = require('express');
const cors = require('cors')
const router = expres.Router();
const express = require('express')
const axios = require('axios')
const app = express()


const chuckNorrisController = require('../controllers/ChuckNorrisControllers');


router.get('/random', chuckNorrisController.random); // se os dois estão vazios 


router.get('/search/:term', chuckNorrisController.search); // se palavra chave ta preenchido 


router.get('/categories', chuckNorrisController.categories) // lista  categoria

router.get('/category/:term', chuckNorrisController.category) // imprimi categoria

module.exports = router;  
