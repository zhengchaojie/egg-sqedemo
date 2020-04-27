'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async selectById() {
    const ctx = this.ctx;
    const service = this.service;
   
    const param = ctx.query;
    console.log(param)
    const result = await service.home.selectById(param.Id);
    ctx.body = result;
  }
}

module.exports = HomeController;
