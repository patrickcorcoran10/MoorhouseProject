const db = require('../models');

module.exports = function(app) {
    // Get All Route for Dashboard
    app.get('/api/dashboard', function(req, res) {
        db.moorhouseprojects.findAll({}).then(function(dbDataPoints) {
            res.json(dbDataPoints);
        });
    });
    // Get Route for Display
    app.get('/api/display:id', function(req, res) {
        db.moorhouseprojects.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbDataPoints) {
            res.json(dbDataPoints)
        });
    });
    // Put Route for Plan select on View Page
    app.put('/api/update:id', function(req, res) {
        db.moorhouseprojects.update({
            planSelect: req.body.planSelect,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(dbDataPoints) {
            res.json(dbDataPoints)
        });
    });
    // View a Single Record Route
    app.get('/api/view:id', function(req, res) {
        db.moorhouseprojects.findAll({
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
        db.moorhouseprojects.destroy({
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
        db.moorhouseprojects.create({
            companyName: req.body.companyName,
            clientName: req.body.clientName,
            clientEmail: req.body.clientEmail,
            totalEmployees: req.body.totalEmployees,
            costPerEmployee: req.body.costPerEmployee,
            dataCollectionTime: req.body.dataCollectionTime,
            dataProcessingTime: req.body.dataProcessingTime,
            securityComplienceTime: req.body.securityComplienceTime,
            emailVolume: req.body.emailVolume,
            planSelect: req.body.planSelect
        })
        .then(function(dbDataPoints) {
            res.json(dbDataPoints)
        });
    })
}