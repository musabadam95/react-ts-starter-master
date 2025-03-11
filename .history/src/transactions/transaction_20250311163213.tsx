import React, { useEffect } from 'react';

import Table from '../components/table/Table'
import { Transaction } from '../types/Transaction.types';


const Transactions = () => {

    const [transactions, setTransactions] = React.useState<Transaction[]>([]);

    function getKeys(data: Transaction[]) {
        if (data.length > 0) {
            return Object.keys(data[0]);
        } else {
            return [];
        }
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://tip-transactions.vercel.app/api/transactions?page=1');
            if (response.status === 200) {
                const data = await response.json();
                const dataTransactions: Transaction[] = data.transactions;
                setTransactions(dataTransactions);
            } else {
                console.log('Error fetching data', response.statusText);
            }
        }
        fetchData()
    }, []);

    console.log(transactions);
    return (
        <div>
            <Table title="Expenses" columns={getKeys(transactions)} data={transactions} />
        </div>
    );
}
export default Transactions;