const  ApiError = require('../error/ApiError')

module.exports = function (err, req, res, next) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message})
    }
    console.log(next) //Выводим, чтобы не было ошибки при commit е
    return res.status(500).json({message: "Непредвиденная ошибка"})
}