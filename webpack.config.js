const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackOnBuildPlugin = require('on-build-webpack');
const fs = require('fs');

module.exports = {
    target: "web",
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: {
        build: path.resolve(__dirname, 'src', 'sass', 'main.scss'),
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },

    watchOptions: {
        ignored: [
            path.resolve(__dirname, 'build', '**'),
            path.resolve(__dirname, 'node_modules', '**')
        ]
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                include: path.resolve(__dirname, 'src', 'sass'),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        }
                    },
                    'css-loader',
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: process.env.NODE_ENV === 'development',
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[hash].[ext]',
                            outputPath: 'resources'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name]-[hash].[ext]',
                            outputPath: 'fonts'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src', 'static'),
                to: '.'
            }
        ]),
        new MiniCssExtractPlugin({
            filename: path.join('css', 'main.css')
        }),
        new WebpackOnBuildPlugin(function () {
            fs.unlinkSync(path.join(__dirname, 'build', 'build.js'));
        }),
    ]
};
