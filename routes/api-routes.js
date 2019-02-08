const db = require('../models');

module.exports = function(app) {
    // Get All Route for Dashboard
    app.get('/api/home', function(req, res) {
        db.moorhouseProject.findAll({}).then(function(dbDataPoints) {
            res.json(dbDataPoints);
        });
    });
    // Search a Single Record Route
    app.get('/api/view:id', function(req, res) {
        db.moorhouseProject.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbDataPoints) {
            res.json(dbDataPoints)
        });
    });
    // Delete Route for Dashboard
    app.delete('/api/delete:id', function(req, res) {
        db.moorhouseProject.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbDataPoints) {
            res.json(dbDataPoints)
        })
    });
    // Post Route for Form Page
    app.post('/api/form', function(req, res) {
        db.moorhouseProject.create({
            companyName: req.body.companyName,
            clientName: req.body.clientName,
            clientEmail: req.body.clientEmail,
            lastFiscalYear: req.body.lastFiscalYear
        })
        .then(function(dbDataPoints) {
            res.json(dbDataPoints)
        });
    })
}