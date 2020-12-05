import React from 'react';
import {Link} from 'react-router-dom';
import {Image} from 'antd';
import Logo from '../files/LOGO-1.png';

const NavBar = () => {
    return(
        <div style = {{height: window.innerHeight*.12, width: window.innerWidth, marginBottom: 20}}>
            <div style = {{height: window.innerHeight*.12, width: window.innerWidth, position: 'fixed', background: '#01184F', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', zIndex: 100}}>
                <Link to = '/home' style = {{marginLeft: 50, height: '10vh', width: '10vh'}}>
                    <Image src = {Logo}/>
                </Link>
                <div style = {{marginRight: 100, display: 'flex', flexDirection: 'row'}}>
                    <NavItem label = 'Add' link = '/add'/>
                    <NavItem label = 'View' link = '/view'/>
                </div>
            </div>
        </div>
    );
}

const NavItem = ({label, link}) => {
    return(
        <Link to = {link} className = 'nav-item'>
            {label}
        </Link>
    )
}

export default NavBar;