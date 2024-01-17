# create-func-com

一键创建 react 函数式组件或页面

[vscode Marketplace](https://marketplace.visualstudio.com/items?itemName=wanpp.create-func-com)

1. 可以生成函数式组件代码： 组件生成后文件夹名称为驼峰式
2. 可以生成页面代码： 页面生成后文件夹名称均是小写

### 安装

- [点击插件市场去安装](https://marketplace.visualstudio.com/items?itemName=wanpp.create-func-com)
- 或者在 vscode 的插件中搜索'create-func-com'并安装

### 使用

在 vscode 左侧文件管理中，想要生成代码的文件夹目录下，点击右键，找到 "generate component" 或 "generate page"选项，根据提示输入想要的组件或页面名称即可生成对应的代码模版文件

### 生成后的代码结构

#### 1. 组件

```
YourComponentName
└───assets
│     index.tsx
│     styles.css
```

#### 2. 页面

```
your-page-name
└───page
|     └─index
|         └─components
│             └─App
│               └─assets
│               | index.tsx
│               | styles.css
│
│   index.html
│   index.tsx
```
