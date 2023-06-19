import { readdir } from 'fs/promises';

const list = async () => {
    const path = "./src/fs/files";
    let arr;
    try {
        arr = await readdir(path);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('FS operation failed');
        }
    }
    console.log(arr);
};
await list();