import React, { useEffect } from 'react';

import Table from '../components/table/table'

const Transactions = () => {

    useEffect(() => {
        console.log("Fetching data from API")
        fetch('https://tip-transactions.vercel.app/api/transactions?page=1')
            .then(response => response.json())
            .then(data => console.log(JSON.stringify(data.transactions), null, 2))
            .catch(error => console.log(error))
    }, []);



    return (
        <div id="table">
            {/* <h1>{props.title}</h1> */}
            {/* <Table>
            </Table> */}
        </div>
    );
}
export default Transactions;