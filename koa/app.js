const Koa = require('koa')
const router = require('./routes/index')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors');
const app = new Koa()

app.use(bodyParser())
app.use(cors({
  origin: '*',
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3030, () => {
  console.log('listen in http://localhost:3030')
})