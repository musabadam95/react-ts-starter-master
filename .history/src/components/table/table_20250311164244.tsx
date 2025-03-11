import { Transaction } from "../../types/Transaction.types";
import './table.css';
interface TableProps {
    title: string;
    columns: string[];
    data: Transaction[];
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
                    {props.data.map((row, index) => (
                        <tr key={index}>
                            {props.columns.map((column, index) => (
                                console.log(row[column]),
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