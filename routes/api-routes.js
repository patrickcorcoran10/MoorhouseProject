const db = require('../models');

module.exports = function(app) {
    // Get All Route for Dashboard
    app.get('/api/dashboard', function(req, res) {
        db.moorhouseproject.findAll({}).then(function(dbDataPoints) {
            res.json(dbDataPoints);
        });
    });
    // Search a Single Record Route
    app.get('/api/view:id', function(req, res) {
        db.moorhouseproject.findAll({
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
    app.post('/api/moorhouseProject', function(req, res) {
        db.moorhouseproject.create({
            companyName: req.body.companyName,
            clientName: req.body.clientName,
            clientEmail: req.body.clientEmail,
            totalEmployees: req.body.totalEmployees,
            costPerEmployee: req.body.costPerEmployee,
            dataCollectionTime: req.body.dataCollectionTime,
            dataProcessingTime: req.body.dataProcessingTime,
            securityComplienceTime: req.body.securityComplienceTime,
            emailVolume: req.body.emailVolume
        })
        .then(function(dbDataPoints) {
            res.json(dbDataPoints)
        });
    })
}