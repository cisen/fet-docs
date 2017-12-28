
/**
 * Module dependencies.
 */

const logger = require('koa-logger');
const serve = require('koa-static');
const Router = require('koa-router');
const Koa = require('koa');
const fs = require('fs');
const app = new Koa();
const path = require('path');

var ROOT_PATH = path.join(__dirname,"./");
const router = new Router();

router.get('/*', (ctx, next) => {
  // ctx.body = path.join(ROOT_PATH, './public/yycomponent/index-cn.html');
  // ctx.body = 'Hello Koa';
  // ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream(path.join(ROOT_PATH, './public/yycomponent'));
  console.log(ctx.res)
});

// log requests
app.use(logger());
app.use(router.routes());
// serve files from ./public
// app.use(serve(path.join(ROOT_PATH, './public/yycomponent')));

// listen
app.listen(8001);
console.log('listening on port 8001');
