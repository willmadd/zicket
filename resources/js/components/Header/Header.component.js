import React from 'react';
import RouteId from '../../routes/routeMap';
import Nav from '../Nav';
import Button from '../Button';
import Image from '../Image';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex justify-between absolute w-full z-20 items-center flex-col md:flex-row">
            <Link to={RouteId.home}>
                <Image src={'/images/logo.svg'} alt='zicket' classNames="m-4 md:m-0 ml-5"/>
            </Link>
            <Nav />
            <Button label={'Get Zicket'} bgCol={'pink-1'}/>
        </header>
    );
};

export default Header;