import {ReactNode} from "react";
import {LocationModel} from "../models/LocationModel.ts";
import {LocationContext} from "../contexts/LocationContext.tsx";
import GenericProvider from "./GenericProvider.tsx";

function LocationProvider({children}: { children: ReactNode }) {
    return (
        <GenericProvider<LocationModel> context={LocationContext}>
            {children}
        </GenericProvider>
    )
}

export default LocationProvider