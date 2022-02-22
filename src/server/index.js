//服务端入口
const express = require('express')
import ssr from './ssr';

const app = express();
app.use(express.static('./dist/client'));//client
app.use(ssr);

app.listen(9000, () => console.log('node listen 9000'));
