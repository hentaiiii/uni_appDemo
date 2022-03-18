const Koa = require('koa')
const router = require('./router')

// 生成应用实例
const app = new Koa()

// 声明使用中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen('3001', () => {
	console.log('3001启动成功')
	console.log('http://localhost:3001')
})
