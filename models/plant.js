module.exports = function (sequelize, DataTypes) {
    var plants = sequelize.define("plants", {
        Common_Name: DataTypes.STRING,
        Scientific_Name: DataTypes.STRING,
        Sunlight_Needs: DataTypes.STRING,
        Moisture_Levels: DataTypes.STRING,
        Humidity: DataTypes.STRING,
        Poisonous: DataTypes.BOOLEAN,
        Maintenance_Level: DataTypes.STRING,
        Price: DataTypes.STRING,
        Garden_Type: DataTypes.STRING,
        Plant_Type: DataTypes.STRING,
    },
        {
            timestamps: false
        }
    );
    return plants;
};