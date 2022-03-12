const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router()

const courseController = require('../app/controllers/CourseController')
//  '/' already being defined in ./routes/index.js


router.get('/:id/edit', courseController.edit);
router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.delete)

module.exports = router;