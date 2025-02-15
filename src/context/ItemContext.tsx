import {ItemModel} from "../model/ItemModel.ts";
import * as React from "react";
import {createContext} from "react";

interface ItemContextProps {
    items: ItemModel[]
    setItems: React.Dispatch<React.SetStateAction<ItemModel[]>>
}

export const ItemContext = createContext<ItemContextProps | undefined>(undefined)

