import {useItemContext} from "../context/ItemContext.tsx";
import {useEffect} from "react";
import axiosInstance from "../api/axiosInstance.ts";

export function useFetchItems() {
    const {setItems} = useItemContext()

    useEffect(() => {
        axiosInstance.get("/api/items")
            .then(response => setItems(response.data))
            .catch(error => console.error("Error fetching Items: ", error))
    }, [setItems])
}