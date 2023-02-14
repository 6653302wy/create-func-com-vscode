export const tsxTemplate = (comName: string): string => {
  return `import { FunctionComponent, ReactElement, useCallback, useEffect, useState } from 'react';
import styles from './styles.css';

export const ${comName}: FunctionComponent = (): ReactElement => {
  const [count, setCounter] = useState(0);

  const onBtnClick = useCallback(() => {
    setCounter((pre) => {
      return pre + 1;
    });
  }, []);

  // when count update
  useEffect(() => {
    console.log('oh, state count has updated!!!');
  }, [count]);

  // when deps is empty, it means component initliaze
  useEffect(() => {
    setCounter(1);
  }, []);

  return (
    <div className={styles.container}>
      <p>{count}</p>
      <button onClick={onBtnClick}>click me</button>
    </div>
  );
};

${comName}.displayName = '${comName}';`;
};

export const cssTemplate = (): string => {
  return `.container {
    background: #eee;
}`;
};

export const pageIndexTemplate = (): string => {
  return `import { createRoot } from 'react-dom/client';
import { App } from './components/App';
      
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);`;
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
        <title>新页面</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
  `;
};
