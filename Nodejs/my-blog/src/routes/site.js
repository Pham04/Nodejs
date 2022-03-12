const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')
//  '/' already being defined in ./routes/index.js

router.get('/search', siteController.search)
router.get('/', siteController.home)

module.exports = router;