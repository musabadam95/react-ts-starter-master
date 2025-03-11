import React from 'react';

interface TablePageProps {
  title: string;
  columns: string[];
  data: string[][];
}

const table = (props: TablePageProps) => {
    return (
        <div id="table">
        <h1>{props.title}</h1>
        <table>
            <thead>
            <tr>
                {props.columns.map((column, index) => (
                <th key={index}>{column}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {props.data.map((row, index) => (
                <tr key={index}>
                {row.map((cell, index) => (
                    <td key={index}>{cell}</td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}