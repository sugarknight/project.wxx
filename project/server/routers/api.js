/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userInfoController = require('./../controllers/user-info')
const datajson = require('./../controllers/datajson')
const message=require('./../controllers/message')

const routers = router
  .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
  .get('/data/data', datajson.readjson)
  .post('/user/signIn.json', userInfoController.signIn)
  .post('/user/signUp.json', userInfoController.signUp)
  .post('/user_message',message.accept)
 
  
module.exports = routers
