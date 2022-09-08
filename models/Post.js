
// IMPORTS
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


// Create the Post model
class Post extends Model{}


// Define table columns + configuration
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
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
        }
    },
    {
        sequelize, // Sequelize connection
        freezeTableName: true, // don't pluralize name of database table
        underscored: true, // uses under_scores instead of camelCasing
        modelName: 'post', // make the model name be lowercase in the database
    }
)


// EXPORT
module.exports = Post;