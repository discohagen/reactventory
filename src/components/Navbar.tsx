import {Link} from "react-router-dom";
import {Route} from "../types.ts";

interface NavbarProps {
    routes: Route[]
}


function Navbar({routes}: NavbarProps) {
    return (
        <nav>
            <ul>
                {routes.map(route => (
                    <li key={route.path}>
                        <Link to={route.path}>{route.title}</Link>
                        {route.subRoutes && (
                            <ul>
                                {route.subRoutes.map(subRoute => (
                                    <li key={subRoute.path}>
                                        <Link to={subRoute.path}>{subRoute.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar