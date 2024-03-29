import axios from "axios";
import {Message} from "element-ui";

const $axios = (options) => {
    return new Promise((resolve, reject) => {
        // 默认配置 axios 实例
        const instance = axios.create({
            // 默认请求 ip
            baseURL: '/secmock/',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            transformRequest: [function(data) {
                //在请求之前对data传参进行格式转换
                data = JSON.stringify(data);
                return data
            }],
            // 请求时间
            timeout: process.env.VUE_APP_Timeout
        });
        // 响应配置
        instance.interceptors.response.use(response => {
            return response;
        }, error => {
            if (error && error.response) {
                switch (error.response.status) {
                    case 400:
                        error.message = '错误请求'
                        break;
                    case 401:
                        error.message = '未授权，请重新登录'
                        break;
                    case 403:
                        error.message = '拒绝访问'
                        break;
                    case 404:
                        error.message = '请求错误,未找到该资源'
                        break;
                    case 405:
                        error.message = '请求方法未允许'
                        break;
                    case 408:
                        error.message = '请求超时'
                        break;
                    case 500:
                        error.message = '服务器端出错'
                        break;
                    case 501:
                        error.message = '网络未实现'
                        break;
                    case 502:
                        error.message = '网络错误'
                        break;
                    case 503:
                        error.message = '服务不可用'
                        break;
                    case 504:
                        error.message = '网络超时'
                        break;
                    case 505:
                        error.message = 'http版本不支持该请求'
                        break;
                    default:
                        error.message = `连接错误${error.response.status}`
                }
            } else {
                error.message = "连接到服务器失败";
            }
            // 错误提示弹框
            Message({
                showClose: true,
                message: error.message,
                duration: 0,
                type: "error"
            })

            return Promise.resolve(error.response);
        })
        // 请求处理
        instance(options).then((res) => {
            resolve(res);
            return false;
        }).catch((error) => {
            reject(error);
        })
    })
}

export default $axios;