import {BrowserRouter, Route, Routes} from "react-router-dom"
import ItemsView from "./view/ItemsView"
import LocationsView from "./view/LocationsView"
import CreateItemView from "./view/create/CreateItemView.tsx";
import {LocationProvider} from "./context/LocationContext.tsx";
import {ItemProvider} from "./context/ItemContext.tsx";


function App() {
    return (
        <LocationProvider>
            <ItemProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/items"} element={<ItemsView/>}/>
                        <Route path={"/items/create"} element={<CreateItemView/>}/>
                        <Route path={"/locations"} element={<LocationsView/>}/>
                    </Routes>
                </BrowserRouter>
            </ItemProvider>
        </LocationProvider>
    )
}

export default App
