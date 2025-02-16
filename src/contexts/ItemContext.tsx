import {ItemModel} from "../models/ItemModel.ts";
import {createGenericContext} from "./genericContext.tsx";

export const ItemContext = createGenericContext<ItemModel>()