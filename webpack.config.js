// Урок5.webpack.config.js - опції  з коментами

const path = require('path');//підключаємо базовий модуль Node.js

module.exports = {//експортуємо об"єкт через глобальний Об"єкт  Node.js - module

context: path.resolve(__dirname ,'src'),//вкказуємо абсолютний шлях до init.js

entry: './init.js',//відносний шлях треба показувати,webpackінакше не розуміє

output:{
    filename:'bundle.js',//файл збірки
    path: path.resolve(__dirname ,'dist'),//абсолютний шлях до фалу збірки
},

resolve:{
    extensions:['.js'] //вказує розширення файлів збірки і непотрібно їх тоді вказувати при
},

watch:true,//якщо вказати true то непотрібно запускати watching !
};