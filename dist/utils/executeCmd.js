"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeCommand = void 0;
const child_process_1 = require("child_process");
function executeCommand(command, options, callback) {
    (0, child_process_1.exec)(command, options, (error, stdout, stderr) => {
        if (error) {
            console.error("Failed to execute command:", error);
        }
        else {
            console.log("Command executed successfully.");
            console.log("stdout:", stdout);
            console.error("stderr:", stderr);
        }
        if (callback) {
            callback(error);
        }
    });
}
exports.executeCommand = executeCommand;
//# sourceMappingURL=executeCmd.js.map