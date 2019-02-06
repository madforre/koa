// 라우터를 이 파일처럼 따로 작성해서 불러올 수 있다.

// books 라는 API 를 준비 ( REST API )

const Router = require('koa-router');

const api = new Router();
const books = require('./books');

api.use('/books', books.routes());

module.exports = api;