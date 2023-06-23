import { exec } from "child_process";

type Callback = (err?: Error | null) => void;

function executeCommand(command: string, options: any, callback?: Callback): void {
    exec(command, options, (error, stdout, stderr) => {
      if (error) {
        console.error("Failed to execute command:", error);
      } else {
        console.log("Command executed successfully.");
        console.log("stdout:", stdout);
        console.error("stderr:", stderr);
      }
      if (callback) {
        callback(error);
      }
    });
  }


export { executeCommand };
