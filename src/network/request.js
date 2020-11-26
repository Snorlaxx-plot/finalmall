import axios from 'axios'

export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/w6',//后端路径
        timeout: 5000
    })

    // 2.axios的拦截器，在请求或响应被 then 或 catch 处理前拦截它们。
    // 2.1.请求拦截的作用
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log('请求拦截后', err);
        return Promise.reject(err)
        //返回一个状态为rejected的Promise对象
    })

    // 2.2.响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log('响应拦截后', err);
        return Promise.reject(err);
        //返回一个状态为rejected的Promise对象
    });


    // 3.发送真正的网络请求 axios实例，并传入配置参数
    return instance(config)
}