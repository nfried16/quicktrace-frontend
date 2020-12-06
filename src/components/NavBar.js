import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'antd';
import Logo from '../files/LogoWhite.png';

const NavBar = () => {
    return (
        <div className = 'noselect' style={{ height: window.innerHeight * .12, width: '100vw', marginBottom: 20 }}>
            <div style={{ height: window.innerHeight * .12, width: '100%', position: 'fixed', background: '#01184F', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', zIndex: 100 }}>
                <Link to = '/home' style = {{marginLeft: 50, height: '10vh', width: '10vh', display: 'flex', flexDirection: 'row'}}> 
                    <div style={{ margin: '0px 7.5px', display: 'flex', alignItems: 'center'}}>
                        <Image preview = {false} src={Logo} width = '8.5vh' height = '8.5vh' />
                    </div>
                    <div style={{ margin: '0px 7.5px', display: 'flex', alignItems: 'center'}}>
                        <h1 style={{ margin: 0, color: "white", font: "Verdana" }}>QuickTrace</h1>
                    </div>
                </Link>
                <div style={{ marginRight: 100, display: 'flex', flexDirection: 'row' }}>
                    <NavItem label='Add' link='/add' />
                    <NavItem label='View' link='/view' />
                </div>
            </div>
        </div>
    );
}

const NavItem = ({ label, link }) => {
    return (
        <Link to={link} className='nav-item'>
            {label}
        </Link>
    )
}

export default NavBar;