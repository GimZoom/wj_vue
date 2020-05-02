module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'store': '@/store',
                'views': '@/views'
            }
        }
    },
    devServer: {
        // open:false,
        // host: "localhost",
        // port: '8080',
        // https: false,
        // hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://localhost:8888',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}