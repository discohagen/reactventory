import {LocationModel} from "./LocationModel"


export interface ItemModel {
    id: number;
    name: string;
    description: string | null;
    quantity: number;
    location: LocationModel | null;
}