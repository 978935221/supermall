import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL:'http://152.136.185.210:8000/api/n3/',
    timeout:500
  })

  // 2.axios的拦截器
  // 2.1请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  },err => {

  })

  // 2.2响应拦截
  instance.interceptors.response.use(res => {
  	return res.data
  },err =>{

  })

  return instance(config)
}
