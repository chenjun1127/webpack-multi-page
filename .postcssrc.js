//.postcssrc.js或postcss.config.js
module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['cover 99.5% in CN']
        })
    ]
}
