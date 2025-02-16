import {Identifiable} from "../types.ts";

export interface GenericModel extends Identifiable {
    name: string
    description: string | null
}