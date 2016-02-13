var path = require( 'path' );
var webpack = require( 'webpack' );
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var webpackDevConfig = {
    overrides: {
        devtool: 'eval',
        debug: true,
        entry: {
            app: [
                'webpack-dev-server/client?http://localhost:8080',
                'webpack/hot/only-dev-server',
                './src/app/app.js'
            ]
        }
    },

    plugins: [
        new webpack.DefinePlugin( {
            'process.env': {
                NODE_ENV: JSON.stringify( 'development' )
            }
        } ),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ],

    loaders: [
        {
            test: /\.jsx?$/,
            loaders: [ 'react-hot', 'babel?cacheDirectory' ],
            include: path.join( __dirname, 'src', 'app' ),
            exclude: path.join( __dirname, 'node_modules' )
        }
    ]
};

module.exports = require( './webpack.config' )( webpackDevConfig );
