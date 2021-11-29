//服务端入口
const express = require('express')
import ssr from './ssr';
import { SevPort } from '../config/server';

const app = express();
app.use(express.static('public'));//main.js
app.use(ssr);

app.listen(SevPort, () => console.log('node listen 9999'));
