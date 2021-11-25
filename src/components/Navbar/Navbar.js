import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from '../Button/Button';
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link
                    to="/"
                    className="navbar-logo"
                    onClick={closeMobileMenu}
                >
                MecApp <i className="fab fa-typo3" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fa fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link
                            to="/buscar_oficina"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                        Buscar Oficina
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/cadastro_cliente"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                        Cadastre-se
                        </Link>
                    </li>
                </ul>
                {button && <Link to="/login_cliente" className='btn--outline'>Login</Link>}
            </div>
        </nav>
            
        </>
    )
}

export default Navbar
