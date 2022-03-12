class NewsController {
    //GET /news
    news (req, res) {
        res.render('news');
    }

    detail (req, res) {
        res.send('News Detail!!!')
    }

}

module.exports = new NewsController();