const Course = require('../models/Course')
const {mongooseToObject} = require('../../ultil/mongoose')


class CourseController {
    // /course/:slug
    show (req, res, next) {
        // res.send(req.params.slug)
        // Course.find({ slug : req.params.slug }, (error, course) => {
        // if (error) {
        //     console.log(error)
        // } else {
        //     console.log(course)
        // }

        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next)

        // Course.find({ slug: req.params.slug }, (error, courses) => {
        //     console.log(error, courses)
        // });

        // Course.findOne({ slug: req.params.slug }, (error, course) => {
        //     console.log(error, course)
        // });

    };

    //GET course/create
    create (req, res, next) {
        res.render('courses/create');
    }

    //POST course/store
    store (req, res, next) {
        const newCourse = new Course(req.body)
        newCourse.save()
            .then(() => res.redirect('/'))
            .catch(error => {
                
            })

        // res.send('Courses saved')
        
    }


    //GET courses/:id/edit
    edit (req, res, next) {
        Course.findById(req.params.id)
            .then(course => {
                res.render('courses/edit', { course: mongooseToObject(course) })
            })
            .catch(next)
    }

    //PUT courses/:id

    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next)
    }

    //DELETE courses/:id
    delete(req, res, next) {
        Course.deleteOne({_id: req.params.id })
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next)
    }

}

module.exports = new CourseController;