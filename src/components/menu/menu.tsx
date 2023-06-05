import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import menu from '../../assets/icons/menu_light.png';
import { UserContexts } from "../../contexts/UserContexts";
import './menu.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

export const Menu = () => {
    const { isMobile, isOpenMenu, setIsOpenMenu } = useContext(UserContexts);
    const navigate = useNavigate();
    

    const goToHome = () => {
        navigate('/');
        setIsOpenMenu(!isOpenMenu);
    }

    const goToComoFunciona = () => {
        navigate('/como-funciona');
        setIsOpenMenu(!isOpenMenu);
    }

    return (
        <>
            <div className={`menuContainer ${isOpenMenu ? 'fade-in' : ''}`}>
                <div className="menuHeader" onClick={() => setIsOpenMenu(!isOpenMenu)}>
                    <div className="content">
                        <img alt="" src={menu} />
                        {
                            isMobile ? '' : <p>Menu</p>
                        }
                    </div>
                </div>
                <div className="menuBody">
                        <div className="item" onClick={goToHome}>
                            <FontAwesomeIcon icon={faHouse}/>
                            <p>Home</p></div>
                        <div className="item" onClick={goToComoFunciona}>
                            <FontAwesomeIcon icon={faCircleQuestion}/>
                            <p>Como funciona</p></div>
                </div>
            </div>
            <div className={`scrim ${isOpenMenu ? 'fade-in' : ''}`} onClick={() => setIsOpenMenu(!isOpenMenu)}></div>
        </>
    )
};