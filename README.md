# Vue 3 + TypeScript + Vite

这个模板应该帮助您开始开发使用 Vue 3 and TypeScript in Vite. 模板使用了 Vue 3 `<script setup>` SFCs, 请参阅 [script setup 文档](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## 推荐的 IDE 设置

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (并禁用 Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 对`.vue`文件的类型支持

TypeScript 无法为`.vue`导入提供类型信息默认，因此我们用`vue-tsc`替换`tsc` CLI 进行类型检查。在编辑器中，我们需要 [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) 来使 TypeScript 语言服务了解`.vue`类型。.

如果您认为内置的 TypeScript 扩展太慢，可以尝试使用 Volar 的 [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) 。按照以下步骤启用它：

1. 禁用内置的 TypeScript 扩展
   1. 运行`Extensions: Show Built-in Extensions`从 VSCode 的命令面板中打开
   2. 找到`TypeScript and JavaScript Language Features`，右键单击并选择`禁用（工作区）`
2. 通过运行`Developer: Reload Window`从命令面板重新加载 VSCode 窗口。

#### 安装依赖 pnpm install

#### 启动项目 npm dev

#### 运行 pnpm ts 即可查看文件是否有 ts 类型错误

#### eslint 安装

> pnpm add eslint -D

#### eslint vue 插件安装

> pnpm add eslint-plugin-vue -D

#### eslint 识别 ts 语法

> pnpm add @typescript-eslint/parser -D

#### eslint ts 默认规则补充

> pnpm add @typescript-eslint/eslint-plugin -D

#### eslint prettier 插件安装

> pnpm add eslint-plugin-prettier -D

#### 用来解决与 eslint 的冲突

> pnpm add eslint-config-prettier -D

#### 安装 prettier

> pnpm add prettier -D

#### 配置 husky、lint-staged、@commitlint/cli

> husky：一个为git客户端增加hook的工具
> lint-staged：仅对Git 代码暂存区文件进行处理，配合husky使用
> @commitlint/cli：让commit信息规范化

```bash
//生成 .husky 的文件夹
npx husky install

// 添加 hooks，会在 .husky 目录下生成一个 pre-commit 脚本文件
npx husky add .husky/pre-commit "npx --no-install lint-staged"

// 添加 commit-msg
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

#### 打包生成`.gz`文件

> pnpm add vite-plugin-compression -D
