import { Application } from 'https://deno.land/x/oak/mod.ts';
import { accountMovementRouter } from './routes/account_movement.router.ts';

const app = new Application();

app.use(accountMovementRouter.routes());

const PORT = 8080;

console.log(`Listening on port ${PORT} ...`);
await app.listen({ port: PORT });