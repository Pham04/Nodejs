const newsRouter = require('./news')
const siteRouter = require('./site')
const coursesRouter = require('./courses')
const commentsRouter = require('./comments')
const meRouter = require('./me')

function route(app){
        
        app.use('/news', newsRouter)
        app.use('/', siteRouter)
        app.use('/courses', coursesRouter)
        app.use('/comments', commentsRouter)
        app.use('/me', meRouter)
}

module.exports = route;