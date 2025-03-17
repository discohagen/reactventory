import { useEffect, useState } from "react"
import { Item } from "../dto/Item.ts"
import { getItems } from "../api/api.ts"

export const ItemList = () => {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    fetchItems().then()
  }, [])

  const fetchItems = async () => {
    const data = await getItems()
    setItems(data)
  }

  return (
    <>
      <h2>Items</h2>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Quantity</th>
        </tr>
        </thead>
        <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  )
}