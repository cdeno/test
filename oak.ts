import { Application } from 'https://cdeno.org/oakserver/oak/v1.0.0/mod.ts'

(async () => {
  const app = new Application()

  app.use(ctx => {
    ctx.response.body = 'Hello World!'
  })

  await app.listen('0.0.0.0:8001')
})()
