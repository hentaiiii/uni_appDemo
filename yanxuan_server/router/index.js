const KoaRouter = require('koa-router')
const Fly=require("flyio/src/node")
const fly=new Fly;
const jwt = require('jsonwebtoken')

// 生成路由器
const router = new KoaRouter()

// 获取首页数据
router.get('/getIndexData', (ctx) => {
	const indexData = require('../datas/index.json')
	ctx.body = indexData
})

// 获取主页分类数据
router.get('/getindexCateList', (ctx) => {
	const indexCateListData = require('../datas/indexCateList.json')
	ctx.body = indexCateListData
})

// 获取分类数据
router.get('/getCateGoryDatas', (ctx) => {
	const categoryDatas = require('../datas/categoryDatas.json')
	ctx.body = categoryDatas
})

// 获取用户openid
router.get('/getOpenId',async (ctx) => {
	const code = ctx.query.code
	const appsecret = 'b5846312465c58615fa727b40eff37bb' 
	const appid = 'wxcea3193149379000'
	
	//  https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
	const res = await fly.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${appsecret}&js_code=${code}&grant_type=authorization_code`)
	
	if(res.status === 200) {
		const openid = JSON.parse(res.data).openid
		const userInfo = {
			openid,
			username: 'zhangxiaoyong',
			age: 26
		}
		 const token = jwt.sign(userInfo, 'zhanxixi')
		 // 反编译token
		 jwt.verify(token, 'zhanxixi', function(err, decoded) {
		   console.log(decoded) 
		 });
		 ctx.body = token
		 
		 
	}

})

module.exports = router