import config from './config'
const Fly = require("flyio/dist/npm/wx");
const fly = new Fly();

fly.config = config

fly.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

fly.interceptors.response.use(
  (response) => {
    let { status, data } = response
    if(status === 200 || status === 304) {
      return data
    } else {
      Promise.reject(response)
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

let axios = (config) => {
  return new Promise((resolve, reject) => {
    let {url, data, ...extraConfig} = config
    console.log('httpRequest url', url)
    console.log('httpRequest data', data)
    console.log('httpRequest extraConfig', extraConfig)
    fly.request(url, data, extraConfig)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default axios