const disabled = 0
// let warning=1
const error = 2
"use strict";
module.exports = {
  extends: ["cz"],
  //新建rule规则，避免提交空的message可以通过审查
  //rule由name和配置数组组成，如：'name:[0, 'always', 72]'，数组中第一位为level，可选0,1,2，0为disable，1为warning，2为error，第二位为应用与否，可选always|never，第三位该rule的值
  //具体可查看https://commitlint.js.org/#/reference-rules
  rules: {
    'type-enum': [error, 'always', ['feat', 'fix', 'refactor', 'docs', 'chore', 'style', 'build']],
    'type-empty': [error, 'never'],
    'scope-empty': [error, 'never'],
    'scope-enum': [disabled]
  }
};