const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const Post = require("./post");
const User = require("./user");
const sequelizeInstance = dbConnect.Sequelize;
class Comment extends Model { }

Comment.init({
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true 
    },
    text: {
        type: DataTypes.STRING, 
        allowNull: false 
    },
    postId: {
        type: DataTypes.INTEGER, 
        references: { 
            model: Post,
            key: 'id'
        }
    },
    userId: {
        type: DataTypes.INTEGER, 
        references: {
            model: User,
            key: 'id'
        }
    }},
    {
        sequelize: sequelizeInstance, 
        modelName: 'comments',
        timestamps: true, 
        freezeTableName: true
    }
)

Comment.belongsTo(Post);
Comment.belongsTo(User);

module.exports = Comment;