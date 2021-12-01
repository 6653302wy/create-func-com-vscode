import * as vscode from "vscode";
import { startCreateCom } from "./createCom";
import { startCreatePage } from "./createPage";

export function activate(context: vscode.ExtensionContext) {
  const component = vscode.commands.registerCommand(
    "create-func-com.component",
    (uri) => {
      // 创建函数式组件模板文件夹
      startCreateCom(uri.fsPath);
    }
  );
  const page = vscode.commands.registerCommand(
    "create-func-com.page",
    (uri) => {
      // 创建页面件模板文件夹
      startCreatePage(uri.fsPath);
    }
  );

  context.subscriptions.push(component);
  context.subscriptions.push(page);
}

// this method is called when your extension is deactivated
export function deactivate() {}
