import {ItemModel} from "../model/ItemModel.ts";
import * as React from "react";
import {createContext, ReactNode, useContext, useState} from "react";

interface ItemContextProps {
    items: ItemModel[]
    setItems: React.Dispatch<React.SetStateAction<ItemModel[]>>
}

const ItemContext = createContext<ItemContextProps | undefined>(undefined)

export function ItemProvider({children}: { children: ReactNode }) {
    const [items, setItems] = useState<ItemModel[]>([])

    return (
        <ItemContext.Provider value={{items, setItems}}>
            {children}
        </ItemContext.Provider>
    )
}

export function useItemContext() {
    const context = useContext(ItemContext)
    if (!context) {
        throw new Error("useItemContext must be used within a ItemProvider")
    }
    return context
}