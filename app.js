
/**
 * Module dependencies.
 */

const logger = require('koa-logger');
const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const path = require('path');

// log requests

app.use(logger());

// serve files from ./public

app.use(serve(path.join(__dirname, '/public/yycomponent')));

// listen

app.listen(3000);
console.log('listening on port 3000');
