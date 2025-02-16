import {LocationModel} from "./LocationModel"
import {GenericModel} from "./GenericModel.ts";


export interface ItemModel extends GenericModel {
    quantity: number;
    location: LocationModel | null;
}