import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { ViewAllItems } from "./view/ViewAllItems.tsx"
import { LocationProvider } from "./state/provider/LocationProvider.tsx"
import { ItemProvider } from "./state/provider/ItemProvider.tsx"
import { ViewAllLocations } from "./view/ViewAllLocations.tsx"

function App() {

  return (
    <ItemProvider>
      <LocationProvider>
        <BrowserRouter>
          <nav>
            <Link to={"/"}>Inventory</Link>
            <Link to={"/items"}>Items</Link>
            <Link to={"/locations"}>Locations</Link>
          </nav>
          <Routes>
            <Route path={"/items"} element={<ViewAllItems />} />
            <Route path={"/locations"} element={<ViewAllLocations />} />
          </Routes>
        </BrowserRouter>
      </LocationProvider>
    </ItemProvider>
  )
}

export default App
