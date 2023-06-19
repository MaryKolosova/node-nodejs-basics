import { rename as renameFile } from 'fs/promises';

const oldPath = "./src/fs/files/wrongFilename.txt";
const newPath = "./src/fs/files/properFilename.md";

const rename = async () => {
    try {
        await renameFile(oldPath, newPath);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('FS operation failed');
        }
    }
};
await rename();