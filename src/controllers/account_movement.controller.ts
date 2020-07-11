import {
  TransactionType,
  AccountMovement
} from "../models/account_movement.model.ts";
import {
  Context,
  helpers,
  RouterContext
} from "https://deno.land/x/oak/mod.ts";
import { AccountMovementsFilter } from "../types/request/account_movements_filter.request.ts";

const arrayAccounts = [
  {
    id: 1,
    date: new Date(),
    ammountMoved: 100,
    description: "Burger King",
    transactionType: TransactionType.DEBIT,
    previousBalance: 200
  }
] as AccountMovement[];

const getAccountMovements = (context: RouterContext) => {
  const { response, params } = context;

  const filter = helpers.getQuery(context, { mergeParams: true });

  response.body = arrayAccounts.filter(
    value => value.id == Number.parseInt(filter.id)
  );
};

export { getAccountMovements };
