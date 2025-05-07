import BottomBar from "../../components/BottomBar/BottomBar"
import historySearchImg from "../../assets/imgs/historico_pesquisa.png"
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const Searches = () => {
    const navigate = useNavigate();
    const getHistorySearch = () => {
        const historySearch = localStorage.getItem('historicoBusca');
        if (!historySearch) return [];
        return JSON.parse(historySearch).map((item: { code: string, title: string }) => ({ code: item.code, title: item.title }));
    }
    // ================ UseEffect ================
    // useEffect(() => {
    //     console.log(getHistorySearch())
    // }, []);
    return (
        <div className="">
            <div className="fixed top-0 left-0 w-full h-[120px] bg-white z-50 leitor-header-box">  {/* Header fixo */}
                <img src={historySearchImg} alt="" className="w-100 h-auto"/>
            </div>
            <div className="pt-[120px] pb-[50px] h-full overflow-y-auto flex flex-col items-center justify-center">
                <div className='grid grid-cols-1 gap-1 max-w-2xl w-full p-4'>
                    {getHistorySearch().map((item: { code: string, title: string }, index: number) => (
                        <div key={index} className="bg-[var(--color-terciary-background)] p-2 rounded-lg shadow-sm flex flex-col items-start gap-1 cursor-pointer hover:bg-[var(--color-secondary-background)] transition duration-200 ease-in-out"
                            onClick={() => navigate(`/reader`, { state: { code: item.code } })}
                        >
                            <span className="text-xs font-medium text-gray-500">{item.code}</span>
                            <span className="text-sm font-bold">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='fixed bottom-0 left-0 w-full'>
                <BottomBar />
            </div>
        </div>
    )
}

export default Searches
