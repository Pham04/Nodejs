const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../ultil/mongoose')

class MeController {
    //GET /me/stored/courses
    storedCourses (req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('me/storedCourses', { courses: multipleMongooseToObject(courses) })
            })
            .catch(error => next(error));
    }
}
module.exports = new MeController();