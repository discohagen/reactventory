import {GenericModel} from "./GenericModel.ts";

export interface LocationModel extends GenericModel {
    parentLocation: LocationModel | null;
}