module.exports = function(sequelize, DataTypes) {
    const MoorhouseProject = sequelize.define('moorhouseprojects', {
        companyName: {type: DataTypes.STRING, allowNull: false},
        clientName: {type: DataTypes.STRING, allowNull: false},
        clientEmail: {type: DataTypes.STRING, allowNull: false},
        totalEmployees: {type: DataTypes.STRING, allowNull: false},
        costPerEmployee: {type: DataTypes.STRING, allowNull: false},
        dataCollectionTime: {type: DataTypes.STRING, allowNull: false},
        dataProcessingTime: {type: DataTypes.STRING, allowNull: false},
        securityComplienceTime: {type: DataTypes.STRING, allowNull: false},
        emailVolume: {type: DataTypes.STRING, allowNull: false},
        planSelect: DataTypes.STRING
    });
    return MoorhouseProject;
};