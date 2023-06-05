import React, { useContext } from 'react';
import './header.scss';
import logo from '../../assets/logo.png';
import menu from '../../assets/icons/menu.png';
import profile from '../../assets/icons/profile.png';
import { useNavigate } from 'react-router-dom';
import { UserContexts } from '../../contexts/UserContexts';
import { Menu } from '../menu/menu';


export const Header = () => {
    const { isMobile, isOpenMenu, setIsOpenMenu } = useContext(UserContexts);
    const navigate = useNavigate();
    

    const goToHome = () => {
        navigate('/');
    }

    return (
        <header className="header">
            <div className="menu"  onClick={() => setIsOpenMenu(!isOpenMenu)}>
                <div className='content'>
                    <img alt="" src={menu} />
                    {
                        isMobile ? '' : <p>Menu</p>
                    }
                </div>
            </div>
            <div className="logo" onClick={goToHome}>
                <img alt="" src={logo} />
            </div>
            <div className="profile">
                <div className='content'>
                    <img alt="" src={profile} />
                    {
                        isMobile ? '' : <p>Entrar</p>
                    }
                </div>
            </div>
            <Menu />
        </header>
    )
};