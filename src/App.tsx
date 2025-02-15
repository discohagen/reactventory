import {BrowserRouter, Route, Routes} from "react-router-dom"
import ItemsView from "./view/ItemsView"
import LocationsView from "./view/LocationsView"
import CreateItemView from "./view/create/CreateItemView.tsx";
import CreateLocationView from "./view/create/CreateLocationView.tsx";
import LocationProvider from "./provider/LocationProvider.tsx";
import Navbar from "./styleOnlyComponent/Navbar.tsx";
import ItemProvider from "./provider/ItemProvider.tsx";


function App() {
    return (
        <LocationProvider>
            <ItemProvider>
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path={"/items"} element={<ItemsView/>}/>
                        <Route path={"/items/create"} element={<CreateItemView/>}/>
                        <Route path={"/locations"} element={<LocationsView/>}/>
                        <Route path={"/locations/create"} element={<CreateLocationView/>}/>
                    </Routes>
                </BrowserRouter>
            </ItemProvider>
        </LocationProvider>
    )
}

export default App
