const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// var TweenMax = require('gsap');
var ScrollMagic = require('scrollmagic');
// require('ScrollMagicGSAP');


module.exports = {
    mode: 'development',
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
        // hints: false
    },
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devServer:{
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module:{
        rules: [
            // {
            //     test: /\.scss$/,
            //     use: [
            //         'style-loader',
            //         'css-loader',
            //         'sass-loader',
            //     ]
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                //   "postcss-loader",
                  "sass-loader",
                ],
              },
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
            // ignoreOrder: false,
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html'
        }),
    ],
    // resolve: {
    //     alias: {
    //       'ScrollMagicGSAP': 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
    //     }
    //   }
}