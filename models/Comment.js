
// IMPORTS
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


// Create the Comment model
class Comment extends Model{
    isLinkedToUser(userId){
        return userId === this.user_id;
    }
}


// Define table columns + configuration
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize, // Sequelize connection
        freezeTableName: true, // don't pluralize name of database table
        underscored: true, // uses under_scores instead of camelCasing
        modelName: 'comment', // make the model name be lowercase in the database
    }
)


// EXPORT
module.exports = Comment;