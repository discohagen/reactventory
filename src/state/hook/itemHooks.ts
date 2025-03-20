import { useCreateData, useDeleteData, useFetchData, useGenericContext } from "./genericHook.ts"
import { ItemContext } from "../context/ItemContext.tsx"
import { Item } from "../../dto/Item.ts"

export function useItemContext() {
  return useGenericContext<Item>(ItemContext)
}

export function useFetchItems() {
  useFetchData<Item>(ItemContext, "/api/items")
}

export function useCreateItem() {
  return useCreateData<Item>(ItemContext, "/api/items")
}

export function useDeleteItem() {
  return useDeleteData<Item>(ItemContext, "/api/items")
}