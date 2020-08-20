const path = require('path');

module.exports = {
    name: 'clone-coding',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js']
    },

    entry: {
        app: path.join(__dirname, 'src/js/main'),
    },

    module: {
        rules: [
            {
                test: /\.js$/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    output: {
        path: path.join(__dirname, 'src/dist'),
        filename: '[name].js',
        publicPath: '/src/dist/',
    }
}