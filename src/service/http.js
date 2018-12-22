import axios from 'axios';

class HttpService {

    /* 请求成功数据处理 */
    successHandle(res) {
        let data = res["data"];
        return {
            data: data.Content,
            message: data.State.Message,
            code: data.State.Code
        }
    }

    /* 请求失败数据处理 */
    errorHandle(res) {
        return {
            data: "",
            message: "",
            code: ""
        }
    }

    /* get请求 */
    get(url, config) {
        return axios.get(url, config).then(this.successHandle).catch(this.errorHandle);
    }

    /* post请求 */
    post(url, data, config) {
        return axios.post(url, data, config).then(this.successHandle).catch(this.errorHandle);
    }

    /* put请求 */
    put(url, data, config) {
        return axios.put(url, data, config).then(this.successHandle).catch(this.errorHandle);
    }

    /* delete请求 */
    delete(url, config) {
        return axios.delete(url, config).then(this.successHandle).catch(this.errorHandle);
    }

    /* request请求 */
    request(config) {
        return axios.request(config).then(this.successHandle).catch(this.errorHandle);
    }
}

export default new HttpService();