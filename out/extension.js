"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const showInputBox = () => {
    const inputBox = vscode.window.createInputBox();
    inputBox.prompt = "请输入组件名";
    inputBox.onDidAccept(() => {
        console.log("input val ===", inputBox.value);
        inputBox.hide();
    });
    inputBox.onDidHide(() => {
        inputBox.dispose();
    });
    inputBox.show();
};
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "create-func-com" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand("create-func-com.helloWorld", () => {
        showInputBox();
        vscode.window.showInformationMessage("Hello World from create-func-com!");
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map