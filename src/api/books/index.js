// REST API 만들어 보기
const Router = require('koa-router');

const books = new Router();


// 핸들러 예시 --------------------------------------

// const handler = (ctx, next) => {
//     ctx.body = `${ctx.request.method} ${ctx.request.path}`;
// };

// 라우트를 작성 할 때에는, 각 라우트에 해당하는 핸들러를 따로 작성하는것이 좋다. 
// 그 이유는, 그렇게 해야 라우트들을 한눈에 보기 쉽기 때문
// books.get('/', handler);

// books.post('/', handler);

// books.delete('/', handler);

// books.put('/', handler);

// books.patch('/', handler);

// ------------------------------------------------


// 각 라우트에 대한 핸들러를 컨트롤러 파일로 분리하였음
const booksCtrl = require('./books.controller');

books.get('/', booksCtrl.list);
books.post('/', booksCtrl.create);
books.delete('/', booksCtrl.delete);
books.put('/', booksCtrl.replace);
books.patch('/', booksCtrl.update);

module.exports = books;
// 이제 포스트맨 같은 HTTP 클라이언트 도구를 사용해서 메소드들을 테스트 해보자.