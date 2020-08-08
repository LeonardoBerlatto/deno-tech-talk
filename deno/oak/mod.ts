
// Exemplo com Oak, um dos micro frameworks mais famosos do Deno
import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();

const router = new Router();

router.get('/hello', (context) => {
    context.response.body = 'Hello World'
})

router.post('/messages', async (context) => {
    context.response.body = await context.request.body().value
    context.response.status = 201
})

app.use(router.routes())

app.listen({
    port: 8080
})