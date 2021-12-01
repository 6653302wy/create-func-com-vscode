import * as vscode from "vscode";

export const showInputBox = (
  prompt: string,
  acceptCb: (result: string) => void,
  placeHolderStr?: string
) => {
  const inputBox = vscode.window.createInputBox();
  inputBox.prompt = prompt;
  inputBox.placeholder = placeHolderStr || "";

  inputBox.onDidAccept(() => {
    const val = inputBox.value;
    // console.log("输入的内容====", val);
    inputBox.hide();
    acceptCb(val);
  });

  inputBox.onDidHide(() => {
    inputBox.dispose();
  });

  inputBox.show();
};

export interface Option {
  label: string;
  description: string;
}
export const showPickBox = (
  titleStr: string,
  optionItem: Option[],
  acceptCb: (result: string) => void
) => {
  let selectItem: vscode.QuickPickItem;

  const pickBox = vscode.window.createQuickPick();
  pickBox.title = titleStr;
  pickBox.items = optionItem;
  // pickBox.items = [
  //   { label: "不需授权", description: "不需要授权的普通页面" },
  //   { label: "需授权", description: "需要授权的普通页面" },
  //   { label: "落地页", description: "落地页模板" },
  // ];
  pickBox.onDidChangeActive((items) => {
    if (items[0]) {
      selectItem = items[0];
    }
  });
  pickBox.onDidAccept(() => {
    if (selectItem) {
      acceptCb(selectItem.label);
      pickBox.hide();
    }
  });
  pickBox.onDidHide(() => {
    pickBox.dispose();
  });

  pickBox.show();
};
