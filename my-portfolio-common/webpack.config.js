const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        library: {
            type: 'commonjs'
        }
    },
    externals: {
        // fix Error: Invalid hook call 
        // https://stackoverflow.com/questions/60087860/issue-with-styled-component-error-invalid-hook-call
        react: "commonjs react",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
};