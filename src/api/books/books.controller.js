// 각 라우트에 대한 핸들러를 books 디렉토리에 books.controller.js 파일로 분리
exports.list = (ctx) => {
    ctx.body = 'listed';
};

exports.create = (ctx) => {
    ctx.body = 'created';
};

exports.delete = (ctx) => {
    ctx.body = 'deleted';
};

exports.replace = (ctx) => {
    ctx.body = 'replaced';
};

exports.update = (ctx) => {
    ctx.body = 'updated';
};

// 이렇게, exports.변수명 = ... 으로 내보내기 한 코드는, 
// 파일을 불러올 때 다음과 같이 사용 할 수 있다.

    // const 모듈명 = require('파일명');
    // 모듈명.변수명

// 코드를 내보낼 때에는, 일반 변수값을 내보낼 수도 있고, 함수를 내보낼 수도 있다.