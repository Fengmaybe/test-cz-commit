"use strict";
module.exports = {
  types: [
    { value: "feat", name: "feat：完整新功能提交" },
    { value: "fix", name: "fix：修复bug" },
    {
      value: "build",
      name: "build：打包，准备发布"
    },
    { value: "docs", name: "docs：只修改了文档相关的文件，例如修改README.md" },
    {
      value: "style",
      name:
        "style：代码风格、不影响代码功能的更改，例如修改空格缩进，换行规范等"
    },
    {
      value: "refactor",
      name: "refactor：既不修复错误也不添加新功能的代码更改，例如重构"
    },
    {
      value: "chore",
      name:
        "chore：对非业务性代码进行修改，例如包管理器,构建过程或辅助工具的变动"
    }
  ],
  scopes: [
    {name:"系统级别"},
    {name:"全局组件"},
    {name:'登录'},
    { name: "概览" },
    { name: "内容运营" },
    { name: "营销中心" },
    { name: "应用中心" },
    { name: "用户中心" },
    { name: "管理中心" },
    { name: "会员忠诚度" },
    {name:"系统设置"},
    {name:"账户管理"}
  ],
  scopeOverrides: {
    fix: [{ name: "merge" }],
    chore: [{name:"git相关"},{name:"webpack配置"},{name:'typescript配置'},{name:'发布配置'}],
    style:[{name:"代码风格"}],
    docs:[{name:"文档"}],
    refactor:[{name:'目录结构'},{name:'路由结构'}],
    build:[{name:'打包'}]
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"]
};