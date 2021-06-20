import React from 'react';
import RouteId from '../../routes/routeMap';
import Nav from '../Nav';
import Button from '../Button';
import Image from '../Image';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex justify-between fixed w-full z-20 items-center">
            <Link to={RouteId.home}>
                <Image src={'/images/logo.png'} alt='zicket' classNames="ml-5"/>
            </Link>
            <Nav />
            <Button label={'Get Zicket'} bgCol={'pink-1'}/>
        </header>
    );
};

export default Header;