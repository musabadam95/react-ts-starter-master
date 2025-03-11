import React, { useEffect } from 'react';

import Table from '../components/table/table'

const Transactions = () => {

useEffect(() => {
    fetch('https://tip-transactions.vercel.app/api/transactions')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}, []);



    return (
        <div id="table">
        <h1>{props.title}</h1>
        <Table>
            </Table>
        </div>
    );
}
export default Transactions;