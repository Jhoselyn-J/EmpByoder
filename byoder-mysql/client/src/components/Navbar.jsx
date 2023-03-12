import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/user">Usuario</Link>
                </li>
                <li>
                <Link to="/admin">Administrador</Link>
                </li>

                
            </ul>
        </div>
    )
}

export default Navbar;