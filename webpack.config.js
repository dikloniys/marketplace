const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let mode = 'development'
const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html', // Данный html будет использован как шаблон
  }),
]; // Создаем массив плагинов
module.exports = {
  mode,
  plugins,
  entry: './src/index.js', // Указываем точку входа - главный модуль приложения,
  // в который импортируются все остальные
  
  output: {
    path: path.resolve(__dirname, 'dist'), // Директория, в которой будет
    // размещаться итоговый бандл, папка dist в корне приложения
    clean: true, // Очищает директорию dist перед обновлением бандла
    // Свойство стало доступно с версии 5.20.0, до этого использовался
    // CleanWebpackPlugin
  },
  
  module: {
  	rules: [
      { test: /\.(html)$/, use: ['html-loader'] }, // Добавляем загрузчик для html
      {test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],}
    ],
  }
}