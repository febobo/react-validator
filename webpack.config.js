var path = require('path');


module.exports = {
    entry: path.resolve(__dirname, './src/react-validator.js'),
    output: {
        path: path.resolve(__dirname, 'example'),
        filename: 'bundle.js',
    },
};