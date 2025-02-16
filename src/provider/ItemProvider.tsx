import {ReactNode} from "react";
import {ItemModel} from "../models/ItemModel.ts";
import {ItemContext} from "../contexts/ItemContext.tsx";
import GenericProvider from "./GenericProvider.tsx";

function ItemProvider({children}: { children: ReactNode }) {
    return (
        <GenericProvider<ItemModel> context={ItemContext}>
            {children}
        </GenericProvider>
    )
}

export default ItemProvider