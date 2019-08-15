const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    entry:__dirname+'/src/main.js',
    output:{
        path:__dirname+'/dist',
        filename:'bundle.js'
    },
    mode:'development',
    plugins:[
        new HtmlWebpackPlugin({
            template:__dirname +'/src/index.html',
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,loader:['style-loader','css-loader']},
            {test:/\.less$/,loader:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,loader:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|jpeg|png|bmp|gif)$/,use:'url-loader?limit=7000&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.vue$/,loader:"vue-loader"}
        ]
    }
}