// var nodemailer = require('nodemailer');
// module.exports = {
//   async send( ctx ) {
    
            
//           var transporter = nodemailer.createTransport({
//             service: 'qq',
//             auth: {
//               user: 'xcpxxxx@163.com',
//               pass: 'qwer1234'
//             }
//             });
//             var mailOptions = {
//               from: 'xcpxxxx@163.com', // 发送者
//               to: '1500358508@qq.com', // 接受者,可以同时发送多个,以逗号隔开
//               subject: 'nodemailer2.5.0邮件发送', // 标题
//               //text: 'Hello world', // 文本
//               html: `<h2>nodemailer基本使用:</h2><h3>
//               <a href="http://blog.csdn.net/zzwwjjdj1/article/details/51878392">
//               http://blog.csdn.net/zzwwjjdj1/article/details/51878392</a></h3>` // html代码
//             };
//             transporter.sendMail(mailOptions, function (err, info) {
//               if (err) {
//                 callback(err,null)
//                 return;
//               }
//               callback(null,info);
//             });
//           },
//   send = function (callback){
//   }
// };;