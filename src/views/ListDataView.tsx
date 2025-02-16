import {Identifiable} from "../types.ts";
import {Link} from "react-router-dom";
import * as React from "react";

interface ListDataViewProps<T extends Identifiable> {
    data: T[]
    deleteData: (id: number) => Promise<void>
    createRoute: string
    error: string | null
    success: boolean
    title: string
}

function ListDataView<T extends Identifiable>({
                                                  data,
                                                  deleteData,
                                                  createRoute,
                                                  error,
                                                  success,
                                                  title
                                              }: ListDataViewProps<T>) {
    function renderValue(value: unknown) {
        if (React.isValidElement(value)) {
            return value
        }
        if (typeof value === "object" && value !== null) {
            return JSON.stringify(value, null, 2)
        }
        return String(value)
    }

    const columns = Object.keys(data[0] || {}) as Array<keyof T>

    return (
        <>
            {error && <p>{error}</p>}
            {success && <p>deleted successfully</p>}
            <h1>{title}</h1>
            <Link to={createRoute}>
                <button>create</button>
            </Link>
            <table>
                <thead>
                <tr>
                    {columns.map((col, i) => (
                        <th key={i}>{renderValue(col)}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map(d => (
                    <tr key={d.id}>
                        {columns.map((col, i) => (
                            <td key={i}>{renderValue(d[col])}</td>
                        ))}
                        <td>
                            <button onClick={() => deleteData(d.id)}>delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default ListDataView