/**
 * 环境切换
 * baseUrl  域名地址
 */
let baseUrl = '';

if (process.env.NODE_ENV == 'development') {
    baseUrl = 'http://127.0.0.1:3000';
} else {
    baseUrl = '';
}

export default {
    baseUrl
}