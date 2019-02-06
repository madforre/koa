require('dotenv').config(); // .env 파일에서 환경변수 불러오기

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api');

const port = process.env.PORT || 4000; // PORT 값이 설정되어있지 않다면 4000 을 사용합니다.


router.get('/', (ctx, next) => {
    ctx.body = '홈';
});

router.get('/about', (ctx, next) => {
    ctx.body = '소개';
})

router.get('/about/:name', (ctx, next) => {
    const { name } = ctx.params; // 라우트 경로에서 :파라미터명 으로 정의된 값이 ctx.params 안에 설정됩니다.
    ctx.body = name + '의 소개';
});

router.get('/post', (ctx, next) => {
    const { id } = ctx.request.query; // 주소 뒤에 ?id=10 이런식으로 작성된 쿼리는 ctx.request.query 에 파싱됩니다.
    if(id) {
        ctx.body = '포스트 #' + id;
    } else {
        ctx.body = '포스트 아이디가 없습니다.';
    }
});

router.use('/api', api.routes()); // api 라우트를 /api 경로 하위 라우트로 설정

// 라우터 설정 및 HTTP 메소드 허용
// app.use(router.routes());
// app.use(router.allowedMethods());
app.use(router.routes(), router.allowedMethods());


// <--------------------------------------------->

// app.use로 미들웨어(필터링 역할)를 어플리케이션에 등록 (등록 순서대로 실행)
app.use((ctx, next) => {
    // ctx 는 웹 요청과 응답에 대한 정보를 지님
    console.log(1);
    next();
});


app.use((ctx, next) => {
    // next 는 다음 미들웨어를 실행시키는 함수, next() 는 프로미스 반환
    console.log("동일 1");
    const started = new Date();
    // 다음 미들웨어 이후 동기 실행.
    next().then(() => {
        console.log(new Date() - started + 'ms');
    });
});

// 바로 위 코드들과 동일하다. async/await 사용.DB에서 유용하게 사용. 콜백 겹칠일 x
app.use(async (ctx, next) => {
    console.log("동일 2");
    const started = new Date();
    console.log("d");
    console.log("d");
    console.log("d");
    console.log("d");
    await next();
    console.log(new Date() - started + 'ms');
});

app.use(ctx => {
    // 이 코드가 하나의 미들웨어이다.
    ctx.body = 'Hello Koa';
});

app.listen(4000, () => {
    console.log('madforre server is listening to port 4000');
});