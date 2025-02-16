import {BrowserRouter, Route, Routes} from "react-router-dom"
import ItemsView from "./views/ItemsView"
import LocationsView from "./views/LocationsView"
import CreateItemView from "./views/create/CreateItemView.tsx";
import CreateLocationView from "./views/create/CreateLocationView.tsx";
import LocationProvider from "./provider/LocationProvider.tsx";
import Navbar from "./components/Navbar.tsx";
import ItemProvider from "./provider/ItemProvider.tsx";
import {Route as RouteType} from "./types.tsx";


function App() {
    const routes: RouteType[] = [
        {
            title: "Home",
            path: "/",
            component: <></>
        },
        {
            title: "Locations",
            path: "/locations",
            component: <LocationsView/>,
            subRoutes: [
                {
                    title: "Create Location",
                    path: "/locations/create",
                    component: <CreateLocationView/>
                }
            ]
        },
        {
            title: "Items",
            path: "/items",
            component: <ItemsView/>,
            subRoutes: [
                {
                    title: "Create Item",
                    path: "/items/create",
                    component: <CreateItemView/>
                }
            ]
        }
    ]

    return (
        <LocationProvider>
            <ItemProvider>
                <BrowserRouter>
                    <Navbar routes={routes}/>
                    <Routes>
                        {routes.map(route => (
                            <Route key={route.path} path={route.path} element={route.component}/>
                        ))}
                        {routes.flatMap(route => route.subRoutes || []).map(subRoute => (
                            <Route key={subRoute.path} path={subRoute.path} element={subRoute.component}/>
                        ))}
                    </Routes>
                </BrowserRouter>
            </ItemProvider>
        </LocationProvider>
    )
}

export default App
