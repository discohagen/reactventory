import {LocationModel} from "../models/LocationModel.ts";
import {createGenericContext} from "./genericContext.tsx";

export const LocationContext = createGenericContext<LocationModel>()