import React, { useEffect, useMemo } from 'react';

import Table from '../components/table/table'
type Transaction = {
    id: number;
    date: string;
    amount: string;
    merchant: string;
    category: string;
}

const Transactions = () => {

const [transactions, setTransactions] = React.useState<Transaction[]>([]);






  useEffect(() => {
    async function fetchData() {
        const response = await fetch('https://tip-transactions.vercel.app/api/transactions?page=1');
        if(response.status === 200) {
            const data = await response.json();
            console.log(data.transactions);
            const dataTransactions: Transaction[] = data.transactions;
            setTransactions(dataTransactions);
        }else {
            console.log('Error fetching data', response.statusText);
        }
    }
      fetchData()
    }, []);

    console.log(transactions);
    return (
        <div id="table">
            {/* <h1>{props.title}</h1> */}
            {/* <Table>
            </Table> */}
        </div>
    );
}
export default Transactions;