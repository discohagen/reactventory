import {BrowserRouter, Route, Routes} from "react-router-dom"
import ItemsView from "./view/ItemsView"
import LocationsView from "./view/LocationsView"


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/items"} element={<ItemsView/>}/>
                <Route path={"/locations"} element={<LocationsView/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
