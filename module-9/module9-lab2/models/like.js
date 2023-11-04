const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const Post = require("./post");
const User = require("./user");
const sequelizeInstance = dbConnect.Sequelize;
class Like extends Model { }
//lookup how to set foreign key in sequelize model
// when  User deletes a Post - also delete the likes and comments associated to that Post
Like.init({
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true 
    },
    postId: {
        type: DataTypes.INTEGER, 
        references: {
            model: Post,
            key: 'id'
        }
    },
    authorId: {
        type: DataTypes.INTEGER, 
        references: {
            model: User,
            key: 'id'
        }
    }},
    {
        sequelize: sequelizeInstance, modelName: 'likes',
        timestamps: true, freezeTableName: true
    }
)

Like.belongsTo(Post);
Like.belongsTo(User);

module.exports = Like;