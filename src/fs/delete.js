import { unlink } from 'fs/promises';

const remove = async () => {
    const path = "./src/fs/files/fileToRemove.txt";
    try {
        await unlink(path);
    }
    catch (err) {
        if (err.code === 'ENOENT') {
        console.error('FS operation failed');
    }}
};
await remove();