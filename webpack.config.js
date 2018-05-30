const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require('webpack');
module.exports = {
    entry: {
        homeView:'./app/homeView.jsx'
    },
    output: {
        path:__dirname+'/public/scripts/',
        filename: "[name].js"
    },
    node: {
        fs: 'empty'
    },
    resolve: {
        extensions: ['.js', '.jsx','.css','.scss','.woff','.svg','.gif']
    },
    plugins: [
        new UglifyJSPlugin(),
        // new webpack.IgnorePlugin(/(locale)/, /node_modules.+(moment)/),
        /*
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
        */
    ],
    
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets:['react', 'env']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|gif)$/,
                loader: 'file-loader',
                query:{
                    name :'app/fonts/[name].[ext]',
                }
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            },
             {
                test: /\.scss$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            }

        ]
    },
    //devtool: 'cheap-module-eval-source-map'
};
