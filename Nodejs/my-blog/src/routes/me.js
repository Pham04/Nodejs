const express = require('express');
const router = express.Router()

const meController = require('../app/controllers/MeController')
//  '/' already being defined in ./routes/index.js


router.get('/stored/courses', meController.storedCourses);


module.exports = router;