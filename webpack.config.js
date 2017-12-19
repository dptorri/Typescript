module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "./public",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./public",
        //colors: true, somehow not valid parameter
        historyApiFallback: true,
        inline: true
    }
 
 }
 