import { Identifiable } from "../types.ts"

export interface Item extends Identifiable {
  name: string
  description: string
  quantity: number
  locationId: number
}