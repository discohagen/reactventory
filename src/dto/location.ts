import { Identifiable } from "../types.ts"

export interface Location extends Identifiable {
  name: string
  description: string
  parentLocationId: number
}