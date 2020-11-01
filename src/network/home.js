// const { request } = require("./request");

import { request } from './request.js'
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'//这个是基于request的baseURL的路径。
    })
}
export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })

}