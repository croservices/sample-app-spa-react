const path = require('path');

module.exports = {
    entry: './frontend/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'static/js')
    },
    module : {
        rules : [
            {
                test: /\.js/,
                include: path.resolve(__dirname, 'frontend'),
                loader: 'babel-loader'
            }
        ]
    }
};
