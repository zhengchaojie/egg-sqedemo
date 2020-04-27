'use strict';
const Service = require('egg').Service;
class HomeService extends Service {
    // constructor(ctx) {
    //     super(ctx); // 调用父对象上的函数。
    //     this.tableName = 'login'; // 数据库表名。
    //     console.log(this.tableName)
    //     this.database = this.ctx.model[this.tableName]; // 获取 model 下的表（ model 相当于数据库的表 ）。
    //     console.log(this.database)
    // }
     /**
     * 根据Id获取表信息。
     * @param {*} id 
     */
    async selectById (id) {
        const {
            ctx,
            app,
          } = this;
        console.log(ctx.model.login)
        
        return
        const result = await ctx.model.Login.findByPK(id); // sequelize 内置查询方法。
        return result;
    }
}
module.exports = HomeService;