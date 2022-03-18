import config from "./config.js"
export default (url, data={}, method ='GET') => {
	return new Promise((resolve, reject) => {
		wx.request({
			url: config.host + url, // 小程序的
			// url, // h5页面的
			data,
			method,
			success(res) {
				resolve(res.data)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}