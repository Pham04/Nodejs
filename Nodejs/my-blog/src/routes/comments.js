const express = require('express')
const router = express.Router()

const commentsController = require('../app/controllers/CommentsController')


router.get('/', commentsController.show);
router.post('/store', commentsController.store);

module.exports = router;