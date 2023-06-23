// DO NOT FORMAT THIS FILE //


export default class Text {

getNewController(name: string): string {
 return (
`import { Request, Response } from 'express'

export default class ${name} {
    
}
  `);
}


getPackageJson(): string{
 return (
`{
  "name": "cold-app",
  "version": "1.0.0",
  "description": "",
  "main": "src/app.ts",
  "scripts": {
    "dev": "npx nodemon"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/cors": "^2.8.13",
    "@types/express": "^4.17.17",
    "@types/node": "^20.3.1",
    "nodemon": "^2.0.22",
    "prisma": "^4.15.0",
    "ts-node": "^10.9.1",
    "typescript": "^5.1.3"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.1.4",
    "express": "^4.18.2",
    "yup": "^1.2.0"
  }
}
`
)
}

getTsConfigJson(): string {
  return (
`{
  "compilerOptions": {
  "target": "es2016",
  "lib": ["es7"],
  "module": "commonjs",
  "rootDir": "src",
  "resolveJsonModule": true,
  "allowJs": true,
  "outDir": "build",
  "esModuleInterop": true,
  "forceConsistentCasingInFileNames": true,
  "strict": true,
  "noImplicitAny": true,
  "skipLibCheck": true
}
}
`
)
}

getNodemonJson(): string {
  return (
`{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/app.ts"
}
`
  )
}

getControllerInit(): string {
  return (
`import { Request, Response } from 'express'

export default class Controller {
    async helloWorld(req: Request, res: Response){
        res.send("Hello World");
    }
}
  `
  )
}

getAppTs(): string {
  return (
`import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Router from "./Routes/index";

dotenv.config();
const app = express();

(async () => {
  try {
    app.use(cors());
    app.use(Router);
    app.listen(8080, () => {
      console.log('Server started at http://localhost:8080');
    });
  } catch (error) {
    console.error(error);
  }
})();
`
  )
}

getIndexRouter(): string {
  return (
`import express from "express";
import Controller from "../Controllers/controller";

const router = express.Router();
const controller = new Controller();

router.get("/", controller.helloWorld);

export default router;
`
  )
}

}