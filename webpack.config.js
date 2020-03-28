
// const isDevelopment = process.env.NODE_ENV === 'development';
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//     plugin: [
//         new MiniCssExtractPlugin({
//             filename: isDevelopment ? '[name].css' : '[name].[hash].css',
//             chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
//         })
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.(t|j)sx?$/,
//                 loader: 'babel-loader',
//                 exclude: /node_modules/
//             },
//             {
//                 test: /\.module\.s(a|c)ss$/,
//                 loader: [
//                     isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
//                     {
//                         loader: 'css-loader',
//                         options: {
//                             modules: true,
//                             sourceMap: isDevelopment
//                         }
//                     },
//                     {
//                         loader: 'sass-loader',
//                         options: {
//                             sourceMap: isDevelopment
//                         }
//                     }
//                 ]
//             },
//             {
//                 test: /\.s(a|c)ss$/,
//                 exclude: /\.module.(s(a|c)ss)/,
//                 loader: [
//                     isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
//                     'css-loader',
//                     {
//                         loader: 'sass-loader',
//                         options: {
//                             sourceMap: isDevelopment
//                         }
//                     }
//                 ]
//             },
//             {
//                 test: /\.(gif|png|jpe?g|svg)$/i,
//                 use: [
//                     'file-loader',
//                     {
//                         loader: 'image-webpack-loader',
//                         options: {
//                             mozjpeg: {
//                                 progressive: true,
//                                 quality: 65
//                             },
//                             optipng: {
//                                 enabled: !isDevelopment
//                             },
//                             pngquant: {
//                                 quality: '65-90',
//                                 speed: 4
//                             },
//                             gifsicle: {
//                                 interlaced: false
//                             },
//                             webp: {
//                                 quality: 75
//                             }
//                         }
//                     }
//                 ]
//             },
//             {
//                 test: /\.(scss)$/,
//                 use: [{
//                     loader: 'style-loader', // inject CSS to page
//                 }, {
//                     loader: 'css-loader', // translates CSS into CommonJS modules
//                 }, {
//                     loader: 'postcss-loader', // Run post css actions
//                     options: {
//                         plugins: function () { // post css plugins, can be exported to postcss.config.js
//                             return [
//                                 require('precss'),
//                                 require('autoprefixer')
//                             ];
//                         }
//                     }
//                 }, {
//                     loader: 'sass-loader' // compiles Sass to CSS
//                 }]
//             },
//         ]
//     },
//     resolve: {
//         extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.gif', '.png', '.jpg', '.jpeg', '.svg']
//     },
//     mode: 'development'
// };

