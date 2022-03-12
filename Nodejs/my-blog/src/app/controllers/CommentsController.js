const Comment = require('../models/Comment')
const {multipleMongooseToObject} = require('../../ultil/mongoose')


class CommentController {
   
    //GET course/create
    show (req, res, next) {
        Comment.find({})
            .then(comments => {
                
                res.render('comments', { comments: multipleMongooseToObject(comments) })
            })
            .catch(error => next(error));
    }

    //POST course/store
    store (req, res, next) {
        const newComment = new Comment(req.body)
        newComment.save()
            .then(() => res.redirect('/comments'))
            .catch(error => {
                
            })
    }
}

module.exports = new CommentController;