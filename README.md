# create-func-com 
a vscode extension about react component generater
 
1. page templates can be generated
2. component templates can be generated

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
