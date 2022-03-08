import React from 'react'; 
import './Header.scss'

export const Header = () => {
    return (
        <header className='Header'>
            <h1>{process.env.REACT_APP_TITLE}</h1>
            <hr /> 
        </header>
    );
}