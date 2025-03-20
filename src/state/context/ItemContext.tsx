import { createGenericContext } from "./GenericContext.tsx"
import { Item } from "../../dto/Item.ts"

export const ItemContext = createGenericContext<Item>()