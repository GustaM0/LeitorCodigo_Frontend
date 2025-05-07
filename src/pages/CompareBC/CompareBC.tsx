import '../Leitor/leitor.css'
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { conectionGET } from '../../api/connections';
import { useLocation } from 'react-router-dom';
// Componemts
import { useSnackBarV1 } from '../../utils/SnackBar/snackBar';
import LoadingBtn from '../../components/Loading/LoadingBtn';
import BottomBar from '../../components/BottomBar/BottomBar'; 
import Scanner from '../../components/Scanner/Scanner';
import Input_1 from '../../components/Inputs/Input_1';
import Buttons from '../../components/Button/Buttons';
import TopBar from '../../components/TopBar/TopBar';
// Icons 
import DirectSearchImg from "../../assets/imgs/direct_search_cosmos.png"
import ItemShow from '../../components/ItemShow/ItemShow';

const CompareBC = () => {
    const { token } = useAuth();

    const location = useLocation();
    const [detectedCode, setDetectedCode] = useState(location.state?.code || '');
    const [scannerOn, setScannerOn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [compareBCData, setCompareBCData] = useState({} as any);
    const snackBarV1 = useSnackBarV1();

    // Requests =======================
    const getProductBC = async() => {
            if (!detectedCode) return
            setIsLoading(true);
            try {
                const response = await conectionGET({ endpoint: `api/cms/product/${detectedCode}`, token: token });
                if (response.status === 401) {
                    snackBarV1('Necessária autenticação!', 8,'error')
                }
                adicionaHistoricoBusca({ code: response?.id || null, title: response?.product || null });
                setCompareBCData(response);
            } catch (error) {
                console.error("Erro ao buscar produto: ", error);
            } finally { 
                setIsLoading(false);
            }
        }

    // Handles =======================================
    const updateFieldHandler = (value: string) => {
        setDetectedCode(value);
    } 

    const handleInitScanner = () => {
        setScannerOn(true);
    }
    const handleStopScanner = () => {
        setScannerOn(false);
    }
     // LocalStorage ==============================
    const adicionaHistoricoBusca = ({ code, title }: { code: string, title: string }) => {
        if (!code || !title) return;
        const historicoBusca = localStorage.getItem('historicoBusca');
        if (!historicoBusca) {
            const novoHistorico = [{ code, title }];
            localStorage.setItem('historicoBusca', JSON.stringify(novoHistorico));
        } else {
            const historicoArray = JSON.parse(historicoBusca);
            const indexCode = historicoArray.findIndex((item: { code: string, title: string }) => item.code === code);
            if (indexCode > -1) {
                historicoArray.splice(indexCode, 1);
            }
            historicoArray.unshift({ code, title });
            if (historicoArray.length > 15) {
                historicoArray.pop();
            }
            localStorage.setItem('historicoBusca', JSON.stringify(historicoArray));
        }
    }
    return (
        <>
        <TopBar image={DirectSearchImg} />
        {/* <div className="fixed top-0 left-0 w-full h-[120px] bg-white z-50 leitor-header-box"> 
            <div className='flex items-center gap-5'>
                <p className='text-2xl'>Pesquisa Direta</p>
                <img src={iconCode} alt="" style={{width: '50px', height: 'auto'}} />
                <IonIcon icon={swapHorizontalOutline} style={{fontSize: '35px', '--ionicon-stroke-width': '25px'}} />
                <img src={LogoMl} alt="" style={{width: '60px', height: 'auto'}} />
            </div>
        </div> */}
        <div className="pt-[120px] pb-[50px] h-full overflow-y-auto flex flex-col items-center justify-center">
                {scannerOn && <Scanner detectedCode={setDetectedCode} closeScanner={handleStopScanner}/>}{/* Scanner */}
                {!scannerOn && 
                <>
                    <div className='h-full w-full pb-[10px] flex flex-col items-center'>
                        <div className='flex flex-col py-10 max-w-2xl w-full leitor-container-box'>
                            <div className='px-10 flex flex-col gap-5'>
                                <div className='w-full flex items-center'>
                                    <p className='text-2xl'>Pesquisar Produto</p>
                                </div>
                                <div className='w-full flex flex-col gap-3'>
                                    <div className='w-full flex items-center gap-3'>
                                        <Input_1 placeholder='Digite o Código de Barras' value={detectedCode} onChange={(e) => updateFieldHandler(e.target.value)}/>
                                        {isLoading ? 
                                            <LoadingBtn />
                                        : (
                                            <Buttons buttonCode='1' text='Pesquisar' onClick={() => getProductBC()} />
                                        )}
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p className='text-2xl mb-1.5'>Ou escaneie o produto: </p>
                                    <Buttons buttonCode='2' text='' onClick={() => handleInitScanner()} />
                                </div>
                            </div>
                            {Object.keys(compareBCData).length > 0 ?
                                (<div className='w-full px-10'>
                                    <div className="my-10 border-b border-gray-300"></div>
                                    <ItemShow compareData={compareBCData} />
                                </div>)
                                : null
                            }
                        </div>
                    </div>
                </>
                }
        </div>
        <BottomBar />
        </>
    )
}

export default CompareBC
