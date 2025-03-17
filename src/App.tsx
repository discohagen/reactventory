import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ItemList} from "./view/ItemList.tsx";

function App() {

    return (
        <BrowserRouter>
            <h1>Inventory</h1>
            <Routes>
                <Route path={"/"} element={<ItemList/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
