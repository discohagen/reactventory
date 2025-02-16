import {useContext} from "react";
import {ItemContext} from "../contexts/ItemContext.tsx";
import {useCreateData, useDeleteData, useFetchData} from "./genericHooks.ts";
import {ItemModel} from "../models/ItemModel.ts";

export function useItemContext() {
    const context = useContext(ItemContext)
    if (!context) {
        throw new Error("useItemContext must be used within a ItemProvider")
    }
    return context
}

export function useFetchItems() {
    useFetchData<ItemModel>(ItemContext, "/api/items")
}

export function useCreateItem() {
    return useCreateData<ItemModel>(ItemContext, "/api/items")
}

export function useDeleteItem() {
    return useDeleteData<ItemModel>(ItemContext, "/api/items")
}