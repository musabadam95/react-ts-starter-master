import { Transaction } from "./Transaction.types";

export type TableProps ={
    title: string;
    columns: string[];
    data: Transaction[];
}