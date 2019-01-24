const { InjectManifest } = require('workbox-webpack-plugin');

const config = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: `${__dirname}/webpack-target`,
        filename: 'main.js',
        chunkFilename: '[name].js',
    },
    optimization: {
        // This will create a `vendors~main.js` file containing `react` and
        // `react-dom`.
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new InjectManifest({
            swSrc: './src/service-worker.js',
            swDest: './service-worker.js',
            chunks: ['main']
        })
    ]
}

module.exports = config;