const fs = require('fs')

const path = '/.dockerenv';

let resultCached: boolean | null = null;

export default function isDocker() {
    if (resultCached !== null) {
        return resultCached;
    }

    try {
        if (fs.existsSync(path)) {
            return resultCached = true;
        }
    } catch(err) {
        return resultCached = false;
    }
}
