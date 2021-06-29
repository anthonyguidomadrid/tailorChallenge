module.exports = app => {

    // Base URLS
    app.use('/api/restaurants', require('./restaurants.routes'))
}