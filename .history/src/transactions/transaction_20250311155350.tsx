import React from 'react';

import Table from '../components/table/Table'

const transactions = (props: TablePageProps) => {
    return (
        <div id="table">
        <h1>{props.title}</h1>
        <table id="table" >
            </table>
        </div>
    );
}
export default transactions;