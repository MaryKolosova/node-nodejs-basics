import { readFile } from 'fs';

readFile('fileToRead.txt',
    (err, data) => {
        if (err) throw err;
        console.log(data.toString('utf8'))
});