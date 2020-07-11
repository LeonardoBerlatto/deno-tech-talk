import { Customer } from "./customer.entity.ts";

export interface AccountMovement {
  id: number;
  description: string;
  date: Date;
  previousBalance: number;
  ammountMoved: number;
  transactionType: TransactionType;
  customer: Customer;
}

export enum TransactionType {
  DEBIT = "DEBIT",
  CREDIT = "CREDIT"
}
