import {ReactNode, useState} from "react";
import {ItemModel} from "../model/ItemModel.ts";
import {ItemContext} from "../context/ItemContext.tsx";

function ItemProvider({children}: { children: ReactNode }) {
    const [items, setItems] = useState<ItemModel[]>([])

    return (
        <ItemContext.Provider value={{items, setItems}}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemProvider