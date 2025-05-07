import './bottomBar.css'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';

// Icons
import { IonIcon } from '@ionic/react';
import { cartOutline, menuOutline } from 'ionicons/icons';
import AccessControl from '../AccessControl/AccessControl';
import { generalUserRoles } from '../AccessControl/generalUserRoles';
import MainMenu from '../MainMenu/MainMenu';
import { useState } from 'react';

const BottomBar = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const [activeMenu, setActiveMenu] = useState(false);
    return (
        // className='fixed bottom-0 left-0 w-full z-10'
        <div className='fixed flex flex-col bottom-0 left-0 w-full z-10 bottom-bar-container'>
            {activeMenu && <MainMenu active={activeMenu} setActive={setActiveMenu}/>}
            <div className="button-container">
            <button className="button" onClick={() => navigate('/reader')}>
                <svg
                className="icon"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                ></path>
                </svg>
            </button>
            <button className="button" onClick={() => navigate("/searches")}>
                <svg
                className="icon"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
                </svg>
            </button>
            <AccessControl aceptedRoles={[generalUserRoles.ROOT]}>
                <button className="button" onClick={() => navigate('/directsearch')}>
                    <IonIcon icon={cartOutline} style={{fontSize: '26px', '--ionicon-stroke-width': '25px'}} />
                </button>
                <button className="button" onClick={() => setActiveMenu(!activeMenu)}>
                    <IonIcon icon={menuOutline} style={{fontSize: '35px', '--ionicon-stroke-width': '23px'}} />
                </button>
            </AccessControl>
            {/* Botão sair */}
            <button className="button" onClick={logout}> 
                {/* <svg
                className="icon"
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path
                    d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                ></path>
                </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 256 256" width="1.4em" height="1.4em">
                    <path d="M152 168v20a20 20 0 01-20 20H52a20 20 0 01-20-20V68a20 20 0 0120-20h76c11.045 0 24 8.955 24 20v20M184 168l40-40-40-40M88 128h128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
                </svg>
            </button>
            </div>
        </div>
    )
}

export default BottomBar
