/*el error esta aqui */
/*Esta es el Nabvar de la pagina  */
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div>
            <p>holaaaa</p>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/user">Usuario</Link>
                </li>
                <Link to="/admin">Administrador</Link>
            </ul>
        </div>
    )
}

export default Navbar;