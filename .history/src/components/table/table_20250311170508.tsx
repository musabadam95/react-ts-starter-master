import { TableProps } from "../../types/Table.types";
import './table.css';

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
                    {props.data.map((row, index) => (
                        <tr key={index}>
                            {props.columns.map((column, index) => (
                                <td key={index}> {row[column]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Table;