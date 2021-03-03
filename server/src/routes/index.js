// Import rota Chukck Norris
const expres = require('express');
const router = expres.Router();

const chuckNorris = require('./chucknorris')

router.use('/chuck-norris', chuckNorris)

module.exports = router; 




