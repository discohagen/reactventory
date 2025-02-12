import {LocationModel} from "../model/LocationModel.ts";
import * as React from "react";
import {createContext} from "react";

interface LocationContextProps {
    locations: LocationModel[]
    setLocations: React.Dispatch<React.SetStateAction<LocationModel[]>>
}

export const LocationContext = createContext<LocationContextProps | undefined>(undefined)

