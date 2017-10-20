
const mailer=require('../controllers/mailer')
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'qq',  
    auth: {  
      user: 'yongqing2008@qq.com',  
      pass: 'hdzviltllzusbhbi' //授权码,通过QQ获取  
    } 
});
//发送邮件
var sendmail = function(html){
    var option = {
        from:"yongqing2008@qq.com",
        to:"sugar-knight@outlook.com"
    }
    option.subject = '留言信息'
    option.html= html;
    transporter.sendMail(option, function(error, response){
        if(error){
            console.log("fail: " + error);
        }else{
            console.log("success: " + response.message);
        }
    });
}
module.exports={
    /**
   * 用户留言处理
   * @param  {obejct} ctx 上下文对象
   */
  async accept( ctx ) {
      console.log(ctx.request.body)
            let result = {
                data:'ok'
              }
                        
            //调用发送邮件
            sendmail("邮件内容：<br/>"+JSON.stringify(ctx.request.body));
            console.log(result)
            ctx.body = result
          },
}