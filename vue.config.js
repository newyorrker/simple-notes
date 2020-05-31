const path = require('path');

module.exports = {
    css: {
        loaderOptions: {
            css: {
                localIdentName: '[local]-[hash:3]',
                camelCase: 'only'
            }
        }
    },
    devServer: {
        hot: true,
        port: 9900,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    runtimeCompiler: true,
    // outputDir: targetPath,
    // publicPath: publicPath,
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src")
            }
        }
    }
}