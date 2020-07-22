/*
 * @Author: your name
 * @Date: 2020-07-22 17:17:58
 * @LastEditTime: 2020-07-22 17:35:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mydemoadmin\src\api\getData.js
 */ 
import axios from 'axios'
import env from '@/config/env'

function getUrl(url) {
    return env.baseUrl + url;
}

export const getAdminInfo = axios.get(getUrl('/admin/info'), {

}).then(function (res) {
    let tmp = {
        status: 1,
        data: {
            avatar: 'default22.jpg'
        }
    };
    console.log(res, tmp);

    return tmp;
}).catch(function (err) {
    let tmp = {
        status: 5001,
        type: 'get fail'
    };
    console.log(err, tmp);

    return tmp
});