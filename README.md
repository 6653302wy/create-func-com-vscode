# vscode 插件 - create-func-com （ts 语言）
 - 快速生成react框架的页面模板代码目录
  1. 可生成页面模板
  2. 可生成组件模板

## 使用：
### 一键生成 react 函数式组件模板代码

在 vscode 资源管理器中，选中需要创建组件的根文件夹，右键菜单选择“创建react函数式组件”选项

生成的代码结构：

```
ComponentName
└───assets
│     index.tsx
│     styles.css
```

### 一键生成 react 页面模板代码

创建方式同上，右键菜单选择“创建react页面”

生成的代码结构：

```
page-name
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
