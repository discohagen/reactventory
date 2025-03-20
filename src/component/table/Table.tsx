import { Identifiable } from "../../types.ts"
import * as React from "react"
import { useState } from "react"

interface TableProps<T extends Identifiable> {
  title: string
  data: T[]
  headers: { [key in keyof T]?: string }
  deleteData: (id: number, safeDelete: boolean) => Promise<void>
}

export function Table<T extends Identifiable>({
                                                title,
                                                data,
                                                headers,
                                                deleteData
                                              }: TableProps<T>) {
  const [safeDelete, setSafeDelete] = useState(true)

  function renderValue(value: unknown) {
    if (React.isValidElement(value)) {
      return value
    }
    if (typeof value === "object" && value) {
      return JSON.stringify(value, null, 2)
    }
    return String(value)
  }

  const keys = Object.keys(headers) as Array<keyof T>

  return (
    <>
      <h2>{title}</h2>
      {data.length > 0
        ? <>
          <input type={"checkbox"} checked={safeDelete} onChange={e => setSafeDelete(e.target.checked)} />
          <table>
            <thead>
            <tr>
              {keys.map((key, i) => (
                <th key={i}>
                  {headers[key]}
                </th>
              ))}
            </tr>
            </thead>
            <tbody>
            {data.map(d => (
              <tr key={d.id}>
                {keys.map((key, i) => (
                  <td key={i}>
                    {renderValue(d[key])}
                  </td>
                ))}
                <td>
                  <button onClick={() => deleteData(d.id, safeDelete)}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </>
        : <p>no data available</p>
      }
    </>
  )

}