import * as fs from "fs";

/**
 * 创建文件夹
 * @param path 路径
 * @param cb 回调
 */
export const mkdirfolder = (path: string, cb?: () => void) => {
  console.log("创建目录...", path);
  if (!fs.existsSync(path)) {
    fs.mkdir(path, (err) => {
      if (err) {
        console.log(err);
        return false;
      }
      console.log(`${path} 目录创建成功!`);

      cb?.();
    });
  } else {
    console.log(`${path} 目录已存在`);

    cb?.();
  }
};

/**
 * 新建模板文件
 * @param fileName 文件名路径
 * @param content 文件内容
 */
export const touchFile = (fileName: string, content: string) => {
  return new Promise<void>((resolve) => {
    if (!fs.existsSync(fileName)) {
      fs.writeFile(fileName, content, (err) => {
        if (err) {
          return console.error(err);
        }
        console.log(`${fileName}文件创建成功`);
        resolve();
      });
    } else {
      resolve();
    }
  });
};

/**
 * 首字母大写
 * */
export const firstUpperCase = (str: string) => {
  return str.replace(str[0], str[0].toUpperCase());
};

/**
 * 首字母大写
 * */
export const readFile = (path: string): string => {
  return fs.readFileSync(path, "utf8");
};
