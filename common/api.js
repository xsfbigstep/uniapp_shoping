export default {
	baseUrl: "http://192.168.12.119:3000/api",
	data: {},
	header: {
		"Content-Type": "application/json",
		// "Content-Type": "application/x-www-form-urlencoded"
	},
	method: "GET",
	dataType: "json",
	request: function(options = {}){
		uni.showLoading({title: '加载中'});
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.baseUrl}${options.url}`, 
				data: options.data || this.data,
				header: options.header || this.header,
				method: options.method || this.method,
				dataType: options.dataType || this.dataType,
				success: (res) => {
				   resolve(res)
				   setTimeout(()=>{
					 uni.hideLoading()  
				   },2000)
				},
				fail: (res) => {
					reject(res)
				}
			});

		})
	}
}