module.exports = {
    mode: "development",
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                
            },
        ],
    },

    devtool: false,

    devServer: {
        contentBase: "./dist",
    },
};