import './mainMenu.css'
import { IonIcon } from '@ionic/react'
import { gridOutline, personOutline } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';

const MainMenu = ({ active, setActive }: { active: boolean, setActive: Function }) => {
    const handleClose = () => {
        if (active) {
            // console.log(`Ativo`)
        }
        setActive(false)
    }
    const navigate = useNavigate();
    return (
        <div  className="bottom-menu-container flex flex-col bg-[var(--color-background-rgb)] rounded-b-lg w-full max-w-[1000px] p-10 gap-10" >
            <div className="w-full flex h-0 cursor-pointer items-center justify-end" onClick={handleClose}>
                <span className='text-2xl'>X</span>
            </div>

            <div className="w-full flex gap-5 cursor-pointer items-center" onClick={() => navigate('/conta')}>
                <IonIcon icon={personOutline} style={{fontSize: '35px', '--ionicon-stroke-width': '25px'}}/>
                <span className='text-xl'>Configurações da Conta</span>
            </div>
            <div className="w-full h-[2px] bg-gray-300"></div>
            <div className="w-full flex gap-5 cursor-pointer items-center" onClick={() => navigate('/aplication')}>
                <IonIcon icon={gridOutline} style={{fontSize: '35px', '--ionicon-stroke-width': '25px'}}/>
                <span className='text-xl'>Configurações da Aplicação</span>
            </div>
        </div>
    )
}

export default MainMenu