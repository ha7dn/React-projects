import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {
    return(
        <ul className='right'>
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
            <li><NavLink to='/signin'></NavLink>Log In</li>

        </ul>
    )
}

export default SignedOutLinks;