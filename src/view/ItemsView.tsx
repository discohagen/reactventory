import {useEffect, useState} from "react"
import {ItemModel} from "../model/ItemModel"
import axiosInstance from "../api/axiosInstance"


function ItemsView() {
    const [items, setItems] = useState<ItemModel[]>([])

    useEffect(() => {
        axiosInstance.get("/api/items")
            .then(response => setItems(response.data))
            .catch(error => console.error("Error fetching Items: ", error))
    }, [])

    const handleDelete = (id: number) => {
        axiosInstance.delete(`/api/items/${id}`)
            .then(() => {
                setItems(items.filter(item => item.id !== id))
            })
            .catch(error => console.error("Error deleting Item: ", error))
    }

    return (
        <div>
            <h1>Items</h1>
            <table>
                <thead>
                <tr>
                    <th>name</th>
                    <th>description</th>
                    <th>quantity</th>
                    <th>location</th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <th>{item.name}</th>
                        <th>{item.description}</th>
                        <th>{item.description}</th>
                        <th>{item.location?.name}</th>
                        <th>
                            <button onClick={() => handleDelete(item.id)}>delete</button>
                        </th>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default ItemsView