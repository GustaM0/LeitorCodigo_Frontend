import { createContext, useContext, useEffect, useState } from "react";
import { conectionPOST } from "../api/connections";
import Loading from "../components/Loading/Loading";
import { useAuth } from "./AuthContext";
interface User {
    name: string;
    email: string;
    role: string;
}

interface UserContextType {
    user: User | null;
}

const Context = createContext<UserContextType>({
    user: null
})
const UserContext = ({ children }: any) => {
    const token = localStorage.getItem('token') || '';
    const { authenticated } = useAuth();
    const [user, setUser] = useState({});
    const [loaded, setLoaded] = useState(true);
    
    useEffect(() => {
        if (authenticated) autoUpdateUser();    
    }, [authenticated]);
    const autoUpdateUser = async () => {
            // if (!token) return;
            setLoaded(false);
            try {
                const userData = await conectionPOST({ endpoint: 'api/finduser', data: {token}, token });
                setUser({email: userData.user.email, name: userData.user.name, role: userData.user.role});
            } catch (error) {
                console.error("API indisponível:", error);
            } finally {
                setLoaded(true);
            }
        }
    
    if (!loaded) return(
        <div className='fixed top-0 left-0 w-full h-full flex 
        items-center justify-center bg-[var(--green--secondary--color)] sm:bg-[var(--color-background)]'>
            <Loading />
        </div>
    );
    return (
        <div>
            <Context.Provider value={{ user: user as User }}>
                {children}
            </Context.Provider>
        </div>
    )
}

const useActiveUser = () => useContext(Context);

export { useActiveUser, UserContext }
