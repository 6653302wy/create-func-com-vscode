import * as vscode from "vscode";
import { cssTemplate, tsxTemplate } from "./codeTemplate";
import { firstUpperCase, mkdirfolder, touchFile } from "./folderAndFileMaker";
import { showInputBox } from "./showInputBox";

let folderPath = "";
let componenetName = "testCom";

const createCodeFiles = async () => {
  const tsxFile = `${folderPath}/index.tsx`;
  // 创建tsx文件
  await touchFile(tsxFile, tsxTemplate(componenetName));
  // 创建css文件
  const cssFile = `${folderPath}/styles.css`;
  await touchFile(cssFile, cssTemplate());

  vscode.window.showInformationMessage("componenet has generated!");
};

// 创建文件夹
const createFolders = () => {
  if (folderPath) {
    mkdirfolder(folderPath, () => {
      // 创建一个assets文件夹
      mkdirfolder(`${folderPath}/assets`, () => {
        createCodeFiles();
      });
    });
  }
};

/** 创建组件模板 */
export const startCreateCom = (uri: string, comName?: string) => {
  // console.log("当前所选路径是===", uri);
  folderPath = uri;
  if (comName) {
    componenetName = firstUpperCase(comName);
    folderPath += `/${componenetName}`;
    console.log("组件路径 ===", folderPath);

    createFolders();
  } else {
    showInputBox(
      "Please input your component name (请输入组件名)",
      (val) => {
        componenetName = firstUpperCase(val);
        folderPath += `/${componenetName}`;
        console.log("组件路径 ===", folderPath);

        createFolders();
      },
      "recommend: TestComponentName"
    );
  }
};
