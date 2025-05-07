import { useEffect, useState } from "react";
import Buttons from "../../components/Button/Buttons"
import BottomBar from "../../components/BottomBar/BottomBar";
import TopBar from "../../components/TopBar/TopBar";
import { useSnackBarV1 } from "../../utils/SnackBar/snackBar";

// Icon
import iconCode from "../../assets/imgs/icon_code.png"
import { conectionGET, conectionPOST } from "../../api/connections";
import { useAuth } from "../../context/AuthContext";
const AutoLoginThird = () => {
    const { token } = useAuth();
    const snackBarV1 = useSnackBarV1();
    const [userMercadoLivre, setUserMercadoLivre] = useState({
        nickname: "",
        first_name: "",
        last_name: "",
        email: "",
    });

    // Requests ====================================================
    const getMlUser = async () => {
        try {
            const response = await conectionGET({ endpoint: "api/ml/verify", token: token });
            setUserMercadoLivre(response.data);
        } catch (error) {
            console.error("Erro ao buscar dados do ML:", error);
        }
    }

    useEffect(() => {
        getMlUser();
    }, []);

    const openPopup = async() => {
        const width = 500;
        const height = 600;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;

        const response = await conectionGET({ endpoint: "api/ml/getaplication", token: token });
    
        const popup = window.open(
            response.url,
        "mercadoLivreAuth",
        `width=${width},height=${height},top=${top},left=${left}`
        );

        if (!popup) {
            alert("Popup bloqueado. Por favor, permita pop-ups neste site.");
            return;
        }
    
        const interval = setInterval(() => {
            if (popup.closed) {
                clearInterval(interval);
            }
        }, 1000);
    };
    useEffect(() => {
        const listener = async (event: any) => {
            // if (event.origin.includes("mercadolivre") || event.origin === window.origin) return ====== VERIFICAR SE É O DOMÍNIO CORRETO
            if (event.origin !== "https://project-redirect-two.vercel.app") return; // DOMINIO DE TESTE
            const { code } = event.data;
            if (code) {
                try {
                    const response = await conectionPOST({ endpoint: "api/ml/auth/authorize", data: { code }, token: token })
                    if (response.success === true) {
                        snackBarV1('Logado com sucesso!', 8,'success')
                        return
                    }
                    snackBarV1('Falha na autenticação!', 8,'error')
                } catch (error) {
                    snackBarV1('Falha na autenticação!', 8,'error')
                }
                console.log("Código recebido:", code);
            }
        };
    
        window.addEventListener("message", listener);
        return () => window.removeEventListener("message", listener);
    }, []);
    return (
        <>
            <TopBar image={iconCode} text={"Configurações da Aplicação"} width="w-20"/>
            <div className="w-full flex justify-center pt-[120px] pb-[50px]">
                <div className="grid grid-cols-1 gap-1 max-w-2xl w-full p-4">
                    {userMercadoLivre.nickname != "" ? (
                        <>
                            <span className="text-2xl font-bold">Perfil Mercado Livre</span>
                            <span className="font-bold">ID/Apelido: <span className="font-normal">{userMercadoLivre.nickname}</span></span>
                            <span className="font-bold">Nome: <span className="font-normal">{userMercadoLivre.first_name} {userMercadoLivre.last_name}</span></span>
                            <span className="font-bold">Email: <span className="font-normal">{userMercadoLivre.email}</span></span>
                            <span className="text-red-500 font-medium my-10">Caso a conta estiver incorreta ou precisar de autenticação, faça login novamente:</span>
                        </>
                    ) : (
                        <>
                            <span className="text-2xl font-bold">Nenhum perfil encontrado</span>
                            <span className="text-red-500 font-medium my-10">Realize login novamente com o Mercado Livre:</span>
                        </>

                    )}
                    {/* <span className="text-2xl font-bold">Perfil Mercado Livre</span>
                    <span className="font-bold">ID/Apelido: <span className="font-normal">{userMercadoLivre.nickname}</span></span>
                    <span className="font-bold">Nome: <span className="font-normal">{userMercadoLivre.first_name} {userMercadoLivre.last_name}</span></span>
                    <span className="font-bold">Email: <span className="font-normal">{userMercadoLivre.email}</span></span> */}
                    <div className="w-full flex justify-center">
                        <Buttons buttonCode="3" text="Entrar" onClick={() => openPopup()} ></Buttons>
                    </div>
                </div>
            </div>
            <BottomBar />
        </>
    )
}

export default AutoLoginThird