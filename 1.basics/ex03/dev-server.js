import http from 'http';
import * as path from 'path';
import express from 'express';

const port = 9090;
const application = express().use(express.static(path.join(path.resolve('.'), 'public')));
// 모듈에선 __ 이거 못씀
http
    .createServer(application)
    .on('listening', function() {
        // console.info('http server runs on ' + port);
        console.info(`http server runs on ${port}`); // 표현식처럼 사용 가능
    })
    .listen(port);