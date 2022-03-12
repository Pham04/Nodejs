const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../ultil/mongoose')

class SiteController {
    //GET /news
    home (req, res, next) {

        //promise
        Course.find({})
            .then(courses => {
                
                res.render('home', { courses: multipleMongooseToObject(courses) })
            })
            .catch(error => next(error));

        //callback
        // Course.find({}, function(err, courses) {
        //     if (!err) {res.json(courses);}
        //     else {res.status(400).json ({ error: 'Loi..!!'});}
        // }); 
        // res.render('home');
    }

    search (req, res) {
        res.send('search')
    }
}

module.exports = new SiteController();