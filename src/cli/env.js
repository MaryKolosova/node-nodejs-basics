const parseEnv = () => {
    const env = process.env;
    for (let i in env) {
        if (i.startsWith('RSS_')) {
        console.log(`${i}=${env[i]}`)
        }
    }
};

parseEnv();