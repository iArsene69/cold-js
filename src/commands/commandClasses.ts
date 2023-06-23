import { createDirectory, createFile } from "../utils/fileUtilities";
import { executeCommand } from "../utils/executeCmd";
import Text from "../utils/getJson";

const text = new Text();

export default class Command {
  InitProject(projectName: string): void {
    const project: string = projectName || "cool-project";
    const srcDir: string = `${project}/src`;

    createDirectory(srcDir, () => {
      createFile(`${project}/tsconfig.json`, text.getTsConfigJson(), () => {
        createFile(`${project}/package.json`, text.getPackageJson(), () => {
          createFile(`${project}/nodemon.json`, text.getNodemonJson(), () => {
            createFile(`${srcDir}/app.ts`, text.getAppTs(), () => {
              createDirectory(`${srcDir}/Controllers`, () => {
                createFile(
                  `${srcDir}/Controllers/controller.ts`,
                  text.getControllerInit(),
                  () => {
                    createDirectory(`${srcDir}/middleware`, () => {
                      createDirectory(`${srcDir}/Validators`, () => {
                        createFile(
                          `${srcDir}/Validators/validation.ts`,
                          "import yup from 'yup';",
                          () => {
                            createDirectory(`${srcDir}/Routes`, () => {
                              createFile(
                                `${srcDir}/Routes/index.ts`,
                                text.getIndexRouter(),
                                () => {
                                  console.log("Project created");
                                  console.log("Installing dependencies...");
                                  executeCommand(
                                    "npm install",
                                    {
                                      cwd: project,
                                    },
                                    () => {
                                      console.log("Dependencies installed");
                                      console.log("Initializing Prisma...");
                                      executeCommand("npx prisma init", {
                                        cwd: project,
                                      });
                                    }
                                  );
                                }
                              );
                            });
                          }
                        );
                      });
                    });
                  }
                );
              });
            });
          });
        });
      });
    });
  }

  createController(name: string): void {
    const controllerDir = "src/Controllers";
    console.log("Creating new controller");
    createFile(
      `${controllerDir}/${name}.ts`,
      text.getNewController(name),
      () => {
        console.log(`New controller created at ${controllerDir}/${name}.ts`);
      }
    );
  }

  createMiddleware(name: string): void {
    const middlewareDir = "src/middleware";
    console.log("Creating new middleware");
    createFile(`${middlewareDir}/${name}.ts`, "", () => {
      console.log(`New middleware created at ${middlewareDir}/${name}.ts`);
    });
  }

  createValidator(name: string): void {
    const validatorDir = "src/Validators";
    console.log("Creating new middleware");
    createFile(`${validatorDir}/${name}.ts`, "import yup from 'yup';", () => {
      console.log(`New middleware created at ${validatorDir}/${name}.ts`);
    });
  }

  createRouter(name: string): void {
    const routerDir = "src/Routes";
    console.log("Creating new router");
    createFile(`${routerDir}/${name}.ts`, "import express from 'express';", () => {
      console.log(`New router created at ${routerDir}/${name}.ts`);
    });
  }
}
