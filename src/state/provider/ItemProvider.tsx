import { ReactNode } from "react"
import { GenericProvider } from "./GenericProvider.tsx"
import { Item } from "../../dto/Item.ts"
import { ItemContext } from "../context/ItemContext.tsx"

export function ItemProvider({ children }: { children: ReactNode }) {
  return (
    <GenericProvider<Item> context={ItemContext}>
      {children}
    </GenericProvider>
  )
}