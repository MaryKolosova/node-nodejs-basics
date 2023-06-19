import { cp } from 'fs';

cp('./src/fs/files', './src/fs/files_copy', {
    recursive: true,
    errorOnExist: true,
    force: false,
    }, (err) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.error('FS operation failed');
            return;
        }
        if (err.code === 'ERR_FS_CP_EEXIST') {
            console.error('FS operation failed');
            return;
        }
        throw err;
    }
});