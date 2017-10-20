
module.exports={

      /**
   * json配置
   * @param  {obejct} ctx 上下文对象
   */
    async datajson( ctx ) {

        let result = {
            "name":'jony'
        }
        console.log(result)
        ctx.body = result
      },



          /**
   * json配置
   * @param  {obejct} ctx 上下文对象
   */
    async readjson( ctx ) {
    
            let result = require('../../data/data.json')
            console.log(result)
            ctx.body = result
          },
        
};