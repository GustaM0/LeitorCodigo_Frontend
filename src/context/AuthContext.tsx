import { createContext, useContext, useEffect, useState } from "react"
import { conectionPOST } from "../api/connections";

// const Context = createContext<{}>({} as {});
interface User {
    name: string;
    email: string;
    role: string;
}


interface LoginResponse {
    success: boolean;
    token: string;
};

interface AuthContextType {
    user: User | null;
    token: string;
    authenticated: boolean;
    login: (loginResponse: LoginResponse) => void;
    logout: () => void;
}

const Context = createContext<AuthContextType>({
    user: null,
    token: '',
    authenticated: false,
    login: () => {},
    logout: () => {}
});

const getCookie = (name: string) => {
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(`${name}=`))
    return cookieValue || null;
};
const AuthProvider = ({ children }: any) => {
    // const [authenticated, setAuthenticated] = useState(true);
    const [authenticated, setAuthenticated] = useState(() => !!getCookie('usrin'));
    const token = localStorage.getItem('token') || '';
    const [user, setUser] = useState({email: '', name: '', role: ''} as AuthContextType['user']);

    const autoUpdateUser = async () => {
        if (!token) return;
        try {
            const userData = await conectionPOST({ endpoint: 'api/finduser', data: {token}, token });
            // setUser({email: userData.user.email, name: userData.user.name, role: userData.user.role});
            return {email: userData.user.email, name: userData.user.name, role: userData.user.role}
        } catch (error) {
            console.error("API indisponível:", error);
        }
    }
    const login = (loginResponse: LoginResponse) => {
        setAuthenticated(true);
        document.cookie = `usrin=; path=/; max-age=9000`; // Faz durar 2h30
        localStorage.setItem('token', loginResponse.token);
    };
    
    const logout = () => {
        setAuthenticated(false);
        setUser(null);
        document.cookie = `usrin=; path=/; max-age=0`;
        localStorage.removeItem('token');
    };

    useEffect(() => { // Atualiza Usuário
        autoUpdateUser();
    }, []);

    return (
        <Context.Provider value={{ authenticated, login, logout, user, token }}>
            {children}
        </Context.Provider>
    )
}

const useAuth = () => useContext(Context);

export {useAuth, AuthProvider}