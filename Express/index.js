import mod  from './module.js';
import { readFileSync } from 'fs';
import express from 'express';

const app = express();

const txt = readFileSync('./hello.txt', 'utf-8');

console.log(txt);
console.log(mod);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
}); 
