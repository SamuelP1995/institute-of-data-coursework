const { DataTypes, Model, STRING } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Pokemon extends Model { }

Pokemon.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    pokemonId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    name: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    height: {
        type: DataTypes.INTEGER,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true
    }},
    {
        sequelize: sequelizeInstance, 
        modelName: 'pokemon',
        timestamps: true, 
        freezeTableName: true
    })

module.exports = Pokemon