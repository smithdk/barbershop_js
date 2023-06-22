const  sequelize = require('../db')
const {DataTypes, fn} = require('sequelize')

const User = sequelize.define('user',{
    id:{type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true,comment:'Id'},
    creatorID:{type: DataTypes.INTEGER,comment:'Id создателя'},
    editorID:{type: DataTypes.INTEGER,comment:'Id редактора'},
    deleterID:{type: DataTypes.INTEGER,comment:'Id удалятеля'},
    createdAt:{type: DataTypes.DATE,defaultValue: fn('now'),comment:'Дата создания'},
    editedAt:{type: DataTypes.DATE,comment:'Дата редактирования'},
    deletedAt:{type: DataTypes.DATE,comment:'Дата удаления'},
    comment:{type: DataTypes.STRING,comment:'Комментарий'},
    barbershopID:{type: DataTypes.INTEGER,comment:'Id парикмахерской'},
    username: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "NONE"},
    },{
    timestamps: false
   })
module.exports = {
    User
}