import './login.css'
import { useAuth } from '../../context/AuthContext'
import LoginContainer from '../../components/LoginContainer/LoginContainer'
import { useNavigate } from 'react-router-dom';
import {useEffect, useState } from 'react';
import envs from '../../config/envs';
import { useSnackBarV1 } from '../../utils/SnackBar/snackBar';
interface Credentials {
    email: string;
    password: string;
}
const Login = () => {
    const snackBarV1 = useSnackBarV1();
    const { authenticated, login } = useAuth();
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email:'tester@email.com',
        password:'KITVnlFu'
    } as Credentials);

    // ============ Requests ================
    const requestLogin  = async () => {
        try {
            // const response = await fetch(`/api/auth`, {
            const response = await fetch(`${envs.apiUrl}${envs.apiPort}/api/users/auth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })
            return response
        } catch (error) {
            console.error(error);
        }
    }

    // ============ Handles ================
    const updateFieldHandler = (key: string, value: string) => {
        setCredentials({ ...credentials, [key]: value });
    }

    const handleLogin = async () => {
        const loginResponse = await requestLogin();
        if (!loginResponse) {
            alert('Erro ao fazer login, tente novamente mais tarde');
            return;
        }
        const data = await loginResponse.json();
        if (!loginResponse.ok) {
            alert('Erro: ' + data.message);
            return;
        } else {
            login(data);
        }
    }

    useEffect(() => {
        if (!authenticated) snackBarV1('Aplicação de Teste - Login preenchido (Usuário teste)!', 10,'info', false)
    }, [])

    useEffect(() => {
        if (authenticated) {
            navigate('/reader');
        }
    },[authenticated]);
    return (
    <div className='w-full h-full flex items-center justify-center bg-[var(--green--secondary--color)] sm:bg-[var(--color-background)]'>
        <LoginContainer credentials={credentials} updateFieldHandler={updateFieldHandler} handleLogin={handleLogin} />
    </div>
    )
}

export default Login
