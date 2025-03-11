import React from "react";
interface TableProps {
    title: string;
    columns: string[];
    data: string[][];
}
const Table = (props: TableProps) => {
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
                    {props.data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Table;