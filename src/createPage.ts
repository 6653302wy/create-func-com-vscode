import * as vscode from "vscode";
import { pageHtmlTemplate, pageIndexTemplate } from "./codeTemplate";
import { startCreateCom } from "./createCom";
import { mkdirfolder, touchFile } from "./folderAndFileMaker";
import { showInputBox } from "./showInputBox";

let folderPath = "";
let pageName = "testPage";
let pageType = "不需授权";

const createFiles = async (path?: string) => {
  const tsxFile = `${path}/index.tsx`;
  const htmlFile = `${path}/index.html`;

  if (pageType === "不需授权") {
    // 创建tsx文件
    await touchFile(tsxFile, pageIndexTemplate());
    // 创建html文件
    await touchFile(htmlFile, pageHtmlTemplate());

    vscode.window.showInformationMessage("page has generated!");
    return;
  }
};

// 创建文件夹
const createFolders = async () => {
  if (folderPath) {
    await mkdirfolder(folderPath);
    await mkdirfolder(`${folderPath}/pages`);
    await mkdirfolder(`${folderPath}/pages/index`);
    createFiles(`${folderPath}/pages/index`);
    mkdirfolder(`${folderPath}/pages/index/components`, () => {
      startCreateCom(`${folderPath}/pages/index/components`, "App");
    });
    // 创建components文件夹
    // mkdirfolder(folderPath, () => {
    //   mkdirfolder(`${folderPath}/pages`, () => {
    //     createFiles();
    //     // 创建components文件夹
    // mkdirfolder(`${folderPath}/components`, () => {
    //   startCreateCom(`${folderPath}/components`, "App");
    // });
    //   });
    // });
  }
};

const checkConfig = () => {
  createFolders();
  // const rootPath = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
  // const cf = readFile(`${rootPath}/.cfcrc.js`);
  // console.log("cf: ", cf);
  // if (!cf) {
  //   console.log("没有配置文件，使用默认模板创建 ");
  //   createFolders();
  //   return;
  // }

  // 优先检查是否有option
  // showPickBox("请选择页面类型", (result: string) => {
  //   pageType = result;
  //   createFolders();
  // });
};

/** 创建页面模板 */
export const startCreatePage = (uri: string) => {
  // console.log("当前所选路径是===", uri);
  folderPath = uri;
  showInputBox(
    "Please input your page name (请输入页面名)",
    (val) => {
      pageName = val;
      folderPath += `/${pageName}`;
      console.log("页面路径 ===", folderPath);

      checkConfig();

      // 询问页面类型
      // showPickBox("请选择页面类型", (result: string) => {
      //   pageType = result;
      //   createFolders();
      // });
    },
    "recommend: test-page-name"
  );
};
