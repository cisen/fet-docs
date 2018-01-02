
/**
 * Module dependencies.
 */

const logger = require('koa-logger');
const serve = require('koa-static');
const Router = require('koa-router');
const Koa = require('koa');
const app = new Koa();
const path = require('path');

var ROOT_PATH = path.join(__dirname,"./");
const router = new Router();

app.use(logger());
app.use(router.routes());
app.use(serve(path.join(ROOT_PATH, './public/yycomponent'), {
  extensions: ['html']
}));

app.listen(7001);
console.log('listening on port 7001');
