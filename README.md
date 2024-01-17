# create-func-com 
a vscode extension about react component generater   
[vscode Marketplace](https://marketplace.visualstudio.com/items?itemName=wanpp.create-func-com)

 
1. component（function component） templates can be generated
2. page templates can be generated

### install
- [click the link](https://marketplace.visualstudio.com/items?itemName=wanpp.create-func-com) of Marketplace to install
- or in the vscode's EXTENSIONS menu to search 'create-func-com' and install

### use
In the vscode explorer, select the root folder where the component needs to be created, and select the "Create React Functional Component" option from the right-click menu.

### code directory struct:

#### 1. component

```
ComponentName
└───assets
│     index.tsx
│     styles.css
```

#### 2. page

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
