"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFile = exports.createDirectory = void 0;
const fs_1 = __importDefault(require("fs"));
function createDirectory(path, callback) {
    fs_1.default.mkdir(path, { recursive: true }, (err) => {
        if (err) {
            console.error("Error creating directory:", err);
        }
        else {
            callback();
        }
    });
}
exports.createDirectory = createDirectory;
function createFile(path, contents, callback) {
    fs_1.default.writeFile(path, contents, (err) => {
        if (err) {
            console.error("Error writing file", err);
        }
        else {
            callback();
        }
    });
}
exports.createFile = createFile;
//# sourceMappingURL=fileUtilities.js.map