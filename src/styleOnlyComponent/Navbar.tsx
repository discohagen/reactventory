import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/locations"}>Locations</Link>
                    <ul>
                        <li>
                            <Link to={"/locations/create"}>Create Location</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to={"/items"}>Items</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar