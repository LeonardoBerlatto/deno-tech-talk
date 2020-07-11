import { Router, Context } from "https://deno.land/x/oak/mod.ts";
import { getAccountMovements } from "../controller/account_movement.controller.ts";

const BASE_PATH = "/account-movements";

const router = new Router().get(`${BASE_PATH}/:id`, getAccountMovements);

export { router as accountMovementRouter };
