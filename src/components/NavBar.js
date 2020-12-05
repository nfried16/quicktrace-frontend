import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    const [s, set] = useState(0);
    return(
        <div style = {{height: window.innerHeight*.12, width: window.innerWidth, marginBottom: 20}}>
            <div style = {{height: window.innerHeight*.12, width: window.innerWidth, position: 'fixed', background: '#01184F', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <div style = {{marginLeft: 50, height: 20, width: 20, background: 'red'}}>

                </div>
                <div style = {{marginRight: 100, background: 'blue', display: 'flex', flexDirection: 'row'}}>
                    <NavItem label = 'Add' link = '/home'/>
                    <NavItem label = 'View'/>
                </div>
            </div>
        </div>
    );
}

const NavItem = ({label, link}) => {
    return(
        <Link to = {link} style = {{color: 'white', margin: '0px 20px'}}>
            {label}
        </Link>
    )
}

export default NavBar;