import fs from "fs";

type Callback = (err?: Error | null) => void;

function createDirectory(path: string, callback: Callback): void {
  fs.mkdir(path, { recursive: true }, (err) => {
    if (err) {
      console.error("Error creating directory:", err);
    } else {
      callback();
    }
  });
}

function createFile(path: string, contents: string, callback: Callback){
  fs.writeFile(path, contents, (err) => {
    if (err) {
      console.error("Error writing file", err)
    }else{
      callback()
    }
  })
}

// function createFile(
//   sourceFilePath: string,
//   destinationFilePath: string,
//   callback: Callback
// ) {
//   fs.readFile(sourceFilePath, "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading the file:", err);
//     } else {
//       fs.writeFile(destinationFilePath, data, "utf8", (err) => {
//         if (err) {
//           console.error("Error writing the file:", err);
//         } else {
//           callback();
//         }
//       });
//     }
//   });
// }


export { createDirectory, createFile };
