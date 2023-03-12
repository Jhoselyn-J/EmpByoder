import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className="bg-amber-300 flex justify-between px-20 py-4">
            <h1 className='font-sans  text-lg font-bold'>EMPRESA BYODER</h1>
            <ul className="flex gap-x-1">
                <li>
                    <Link to="/" className=" font-bold">Home</Link>
                </li>
                <li>
                    <Link to="/user" className="bg-cyan-300 font-bold px-3 py-3" >Usuario</Link>
                </li>
                <li>
                <Link to="/admin" className="bg-cyan-300 font-bold px-3 py-3">Administrador</Link>
                </li>

                
            </ul>
        </div>
    )
}

export default Navbar;