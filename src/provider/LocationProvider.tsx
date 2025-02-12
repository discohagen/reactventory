import {ReactNode, useState} from "react";
import {LocationModel} from "../model/LocationModel.ts";
import {LocationContext} from "../context/LocationContext.tsx";

function LocationProvider({children}: { children: ReactNode }) {
    const [locations, setLocations] = useState<LocationModel[]>([])

    return (
        <LocationContext.Provider value={{locations, setLocations}}>
            {children}
        </LocationContext.Provider>
    )
}

export default LocationProvider