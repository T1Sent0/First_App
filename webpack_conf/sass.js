const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function (paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: paths,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: ["css-loader", 'sass-loader']
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin("../css/style.css"),
        ]
    };
};