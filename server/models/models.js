const  sequelize = require('../db')
const {DataTypes, fn} = require('sequelize')

const Object = sequelize.define('object',{
    id:{type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true,comment:'Id'},
    creatorId:{type: DataTypes.INTEGER,comment:'Id создателя'},
    editorId:{type: DataTypes.INTEGER,comment:'Id редактора'},
    deleterId:{type: DataTypes.INTEGER,comment:'Id удалятеля'},
    createdAt:{type: DataTypes.DATE,defaultValue: fn('now'),comment:'Дата создания'},
    editedAt:{type: DataTypes.DATE,comment:'Дата редактирования'},
    deletedAt:{type: DataTypes.DATE,comment:'Дата удаления'},
    comment:{type: DataTypes.STRING,comment:'Комментарий'},

    name:{type: DataTypes.STRING,comment:'Название'},
    addressCountry: {type: DataTypes.STRING,comment:'адрес Страна'},
    addressRegion:{type: DataTypes.STRING,comment:'адрес Регион'},
    addressDistrict:{type: DataTypes.STRING,comment:'адрес Район'},
    addressStreet:{type: DataTypes.STRING,comment:'адрес Улица'},
    addressBuildingNumber:{type: DataTypes.STRING,comment:'адрес Номер дома'},
    photo:{type: DataTypes.STRING,comment:'Фото'}
},{
    timestamps: false
})


const User = sequelize.define('user',{
    id:{type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true,comment:'Id'},
    creatorId:{type: DataTypes.INTEGER,comment:'Id создателя'},
    editorId:{type: DataTypes.INTEGER,comment:'Id редактора'},
    deleterId:{type: DataTypes.INTEGER,comment:'Id удалятеля'},
    createdAt:{type: DataTypes.DATE,defaultValue: fn('now'),comment:'Дата создания'},
    editedAt:{type: DataTypes.DATE,comment:'Дата редактирования'},
    deletedAt:{type: DataTypes.DATE,comment:'Дата удаления'},
    comment:{type: DataTypes.STRING,comment:'Комментарий'},
    objectId:{type: DataTypes.INTEGER,comment:'Id объекта'},
    username: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "NONE"},
    userInfoId: {type: DataTypes.INTEGER,comment:'Id Информации о пользователе'},
    },{
    timestamps: false
   })

Object.hasOne(User);
User.belongsTo(Object)
//User.hasOne(Object);
//Object.belongsTo(User);


module.exports = {
    User,
    Object
}