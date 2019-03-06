const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/scmp.api', {
        target: 'http://192.168.1.234:8000/',
        pathRewrite: {
            "^/scmp.api": "/"
        }
    }));
    app.use(proxy('/file.api', {
        target: 'http://10.4.69.36:4200/',
        pathRewrite: {
            "^/file.api": "/"
        }
    }));
};