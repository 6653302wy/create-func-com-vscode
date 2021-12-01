export const tsxTemplate = (comName: string): string => {
  return `import { FunctionComponent, ReactElement } from 'react';
import styles from './styles.css';

export const ${comName}: FunctionComponent = (): ReactElement => {
    return <div className={styles.container}>${comName}</div>;
};
${comName}.displayName = '${comName}';`;
};

export const cssTemplate = (): string => {
  return `.container {
    background: #eee;
}`;
};

export const pageIndexTemplate = (): string => {
  return `import { render } from 'react-dom';
import { App } from './components/App';
      
render(<App />, document.getElementById('root'));`;
};

export const pageHtmlTemplate = (): string => {
  return `<!DOCTYPE html>
<html lang="zh">
    <head>
        <meta charset="UTF-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no" />
        <!-- 添加开始时间 -->
        <%= htmlWebpackPlugin.options.startTime %>
        <title>新页面</title>
    </head>
    <body>
        <div id="root"></div>
        
        <!-- cnzz统计 -->
        <%= htmlWebpackPlugin.options.cnzz %>
        <!-- 载入servicework -->
        <%= htmlWebpackPlugin.options.serviceWorker %>
        <!-- 调试工具插件 -->
        <%= htmlWebpackPlugin.options.eruda %>
    </body>
</html>
  `;
};
