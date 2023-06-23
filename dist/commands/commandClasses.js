"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fileUtilities_1 = require("../utils/fileUtilities");
const executeCmd_1 = require("../utils/executeCmd");
const getJson_1 = __importDefault(require("../utils/getJson"));
const text = new getJson_1.default();
class Command {
    InitProject(projectName) {
        const project = projectName || "cool-project";
        const srcDir = `${project}/src`;
        (0, fileUtilities_1.createDirectory)(srcDir, () => {
            (0, fileUtilities_1.createFile)(`${project}/tsconfig.json`, text.getTsConfigJson(), () => {
                (0, fileUtilities_1.createFile)(`${project}/package.json`, text.getPackageJson(), () => {
                    (0, fileUtilities_1.createFile)(`${project}/nodemon.json`, text.getNodemonJson(), () => {
                        (0, fileUtilities_1.createFile)(`${srcDir}/app.ts`, text.getAppTs(), () => {
                            (0, fileUtilities_1.createDirectory)(`${srcDir}/Controllers`, () => {
                                (0, fileUtilities_1.createFile)(`${srcDir}/Controllers/controller.ts`, text.getControllerInit(), () => {
                                    (0, fileUtilities_1.createDirectory)(`${srcDir}/middleware`, () => {
                                        (0, fileUtilities_1.createDirectory)(`${srcDir}/Validators`, () => {
                                            (0, fileUtilities_1.createFile)(`${srcDir}/Validators/validation.ts`, "import yup from 'yup';", () => {
                                                (0, fileUtilities_1.createDirectory)(`${srcDir}/Routes`, () => {
                                                    (0, fileUtilities_1.createFile)(`${srcDir}/Routes/index.ts`, text.getIndexRouter(), () => {
                                                        console.log("Project created");
                                                        console.log("Installing dependencies...");
                                                        (0, executeCmd_1.executeCommand)("npm install", {
                                                            cwd: project,
                                                        }, () => {
                                                            console.log("Dependencies installed");
                                                            console.log("Initializing Prisma...");
                                                            (0, executeCmd_1.executeCommand)("npx prisma init", {
                                                                cwd: project,
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }
    createController(name) {
        const controllerDir = "src/Controllers";
        console.log("Creating new controller");
        (0, fileUtilities_1.createFile)(`${controllerDir}/${name}.ts`, text.getNewController(name), () => {
            console.log(`New controller created at ${controllerDir}/${name}.ts`);
        });
    }
    createMiddleware(name) {
        const middlewareDir = "src/middleware";
        console.log("Creating new middleware");
        (0, fileUtilities_1.createFile)(`${middlewareDir}/${name}.ts`, "", () => {
            console.log(`New middleware created at ${middlewareDir}/${name}.ts`);
        });
    }
    createValidator(name) {
        const validatorDir = "src/Validators";
        console.log("Creating new middleware");
        (0, fileUtilities_1.createFile)(`${validatorDir}/${name}.ts`, "import yup from 'yup';", () => {
            console.log(`New middleware created at ${validatorDir}/${name}.ts`);
        });
    }
    createRouter(name) {
        const routerDir = "src/Routes";
        console.log("Creating new router");
        (0, fileUtilities_1.createFile)(`${routerDir}/${name}.ts`, "import express from 'express';", () => {
            console.log(`New router created at ${routerDir}/${name}.ts`);
        });
    }
}
exports.default = Command;
//# sourceMappingURL=commandClasses.js.map