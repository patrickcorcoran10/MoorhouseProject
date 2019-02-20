module.exports = function(sequelize, DataTypes) {
    const MoorhouseProject = sequelize.define('moorhouseprojects', {
        companyName: DataTypes.STRING,
        clientName: DataTypes.STRING,
        clientEmail: DataTypes.STRING,
        totalEmployees: DataTypes.STRING,
        costPerEmployee: DataTypes.STRING,
        dataCollectionTime: DataTypes.STRING,
        dataProcessingTime: DataTypes.STRING,
        securityComplienceTime: DataTypes.STRING,
        emailVolume: DataTypes.STRING,
        planSelect: DataTypes.STRING
    });
    return MoorhouseProject;
};