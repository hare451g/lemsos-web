import fs from 'fs';

const getMDfromFile = (filename = '') => fs.readFileSync(filename, 'utf-8');
const getMDfromFolder = (path = '') => fs.readdirSync(path).map(getMDfromFile);

export { getMDfromFile, getMDfromFolder };
