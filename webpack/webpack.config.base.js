const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const paths = require('./paths');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
            favicon: 'src/favicon.ico',
        }),
        new CopyWebpackPlugin([
            {
                from: `${paths.appAssets}/images/`,
                to: `assets/images/`
            },
            {
                from: `${paths.appAssets}/fonts/`,
                to: `assets/fonts/`
            },
            {
                from: `${paths.appAssets}/svg/`,
                to: `assets/svg/`
            },
        ]),
        new webpack.HashedModuleIdsPlugin({
            hashFunction: 'md4',
            hashDigest: 'base64',
            hashDigestLength: 8
        }),
    ],
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            chunks: 'all',
        }
    },
    performance: {
        hints: false,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules'],
        alias: {
            Components: path.resolve(paths.appSrc, 'components'),
            Containers: path.resolve(paths.appSrc, 'containers'),
            Assets: path.resolve(paths.appSrc, 'assets'),
            Store: path.resolve(paths.appSrc, 'store'),
            Root: path.resolve(paths.appSrc),
        },
    },
    module: {
        rules: [
            {
                test: /\.(png|jp(g|ge)?|gif|webp)$/,
                use: [
                    {
                        loader: 'cache-loader'
                    },
                    {
                        loader: 'file-loader'
                    },
                ],
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'cache-loader'
                    },
                    {
                        loader: '@svgr/webpack',
                    },
                ],
            },
            {
                test: /\.(woff(2)?|eot|ttf)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'cache-loader'
                    },
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
};
