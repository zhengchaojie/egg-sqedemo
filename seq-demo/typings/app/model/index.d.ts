// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAbc = require('../../../app/model/abc');
import ExportLogin = require('../../../app/model/login');
import ExportRole = require('../../../app/model/role');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Abc: ReturnType<typeof ExportAbc>;
    Login: ReturnType<typeof ExportLogin>;
    Role: ReturnType<typeof ExportRole>;
    User: ReturnType<typeof ExportUser>;
  }
}
