const path = require('path')

module.exports = {
    css: {
        loaderOptions: {
            stylus: {
                import: [
                    '~rupture/rupture/index.styl',
                    path.resolve(__dirname, './src/styles/reset.styl'),
                    path.resolve(__dirname, './src/styles/colors.styl'),
                    path.resolve(__dirname, './src/styles/fonts.styl'),
                ]
            }
        }
    }
}