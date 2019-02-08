module.exports = function(sequelize, DataTypes) {
    const MoorhouseProject = sequelize.define('moorhouse', {
        companyName: DataTypes.STRING,
        clientName: DataTypes.STRING,
        clientEmail: DataTypes.STRING,
        lastFiscalYear: DataTypes.STRING
    });
    return MoorhouseProject;
};