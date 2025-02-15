import {useContext, useEffect, useState} from "react";
import axiosInstance from "../api/axiosInstance.ts";
import {ItemContext} from "../context/ItemContext.tsx";

export function useItemContext() {
    const context = useContext(ItemContext)
    if (!context) {
        throw new Error("useItemContext must be used within a ItemProvider")
    }
    return context
}

export function useFetchItems() {
    const {setItems} = useItemContext()

    useEffect(() => {
        axiosInstance.get("/api/items")
            .then(response => setItems(response.data))
            .catch(error => console.error("Error fetching Items: ", error))
    }, [setItems])
}

export function useCreateItem() {
    const {setItems} = useItemContext()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    async function createItem(name: string, description: string, quantity: number) {
        setIsLoading(true)
        try {
            const response = await axiosInstance.post("/api/items", {name, description, quantity})
            setItems(prevItems => [...prevItems, response.data])
            setSuccess(true)
        } catch (err) {
            setError("Error creating Item: " + err)
        } finally {
            setIsLoading(false)
        }
    }

    return {createItem, isLoading, error, success}
}

export function useDeleteItem() {
    const {items, setItems} = useItemContext()
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    async function deleteItem(id: number) {
        axiosInstance.delete(`/api/items/${id}`)
            .then(() => {
                setItems(items.filter(item => item.id !== id))
                setSuccess(true)
            })
            .catch(error => setError("Error deleting Item: " + error))
    }

    return {deleteItem, error, success}
}