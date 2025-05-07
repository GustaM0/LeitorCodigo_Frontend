import BottomBar from "../../components/BottomBar/BottomBar";
import { useActiveUser } from "../../context/UserContext"

// Icons
import { IonIcon } from '@ionic/react';
import { personCircleOutline } from 'ionicons/icons';
const User = () => {
    const {user} = useActiveUser();
    return (
        <>
        <div className="fixed top-0 left-0 w-full h-[120px] bg-white z-50 leitor-header-box">  {/* Header fixo */}
            <div className="flex items-center gap-2">
                <IonIcon icon={personCircleOutline} style={{fontSize: '50px', '--ionicon-stroke-width': '10px'}}/>
                <span className="text-3xl">Informações da Conta</span>
            </div>
        </div>
        <div className="pt-[120px] pb-[50px] h-full overflow-y-auto flex flex-col items-center">
            <div className="grid grid-cols-1 gap-1 max-w-2xl w-full p-4">
                <p>Nome: {user?.name}</p>
                <p>Email: {user?.email}</p>
                {/* <p>Alterar Senha</p> */}
            </div>
        </div>
        <BottomBar />
        </>
    )
}

export default User