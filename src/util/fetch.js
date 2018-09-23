import axios from 'axios'
import {Modal} from 'antd'
export default class Fetch {
    static jsonp() {}
    static Get (options) {
        let baseUrl = 'https://www.easy-mock.com/mock/5b87932f33c312613fe29529/example'
        return new Promise((resolve,reject) => {
            axios({
                url:options.url,
                method: 'get',
                baseURL: baseUrl,
                timeout: 5000,
                params: (options.data && options.data.params) || ''
            }).then((res)=> {
                if(res.status === 200) {
                    if(res.data.code === '0'){
                        resolve(res.data)
                    }else{
                        Modal.info({
                            title:'提示',
                            content: res.data.msg
                        })
                    }
                }else{
                    reject(res.data)
                }
            })
        });
    }
    static Post(options) {
        let baseUrl = 'https://www.easy-mock.com/mock/5b87932f33c312613fe29529/example'
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'post',
                baseURL: baseUrl,
                timeout: 5000,
                params: (options.data && options.data.params) || ''
            }).then((res) => {
                if (res.status === 200) {
                    if (res.data.code === '0') {
                        resolve(res.data)
                    } else {
                        Modal.info({
                            title: '提示',
                            content: res.data.msg
                        })
                    }
                } else {
                    reject(res.data)
                }
            })
        });
    }
} 