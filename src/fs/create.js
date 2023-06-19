import { access, writeFile } from 'fs';
const filePath = "./src/fs/files/fresh.txt";

access(filePath, function (err) {
    if (err) {
        writeFile(filePath, "I am fresh and young", (err) => {
            if (err) throw err;
            console.log("The file has been created!");
        });
    } else {
        console.log("FS operation failed");
    }
});