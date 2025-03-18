import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/*', cors())

app.get('/api/hello', (c) => c.json({ message: 'Hello from API!' }))

export const config = {
  runtime: 'edge'
}

export default handle(app) 