import './loginContainer.css'
import LogoLeitor from '../../assets/imgs/leitor_produto_logo.png'
const LoginContainer = ({ credentials, updateFieldHandler, handleLogin }: any) => {
    return (
        <div className='login-container-component'>
            <form className="form_container" onSubmit={(e) => {e.preventDefault(); handleLogin();}}>
                    <img
                        src={LogoLeitor}
                        alt="Logo"
                        className='w-130 h-auto'
                    />
                {/* <div className="logo_container">
                </div> */}
                <div className="title_container">
                    <p className="title">Entre em sua conta</p>
                    <span className="subtitle">
                        Para acessar ao aplicativo, por favor insira suas credenciais de login. 
                    </span>
                </div>
                <br />
                <div className="input_container">
                    <label className="input_label" htmlFor="email_field">
                        Email
                    </label>
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                    >
                        <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        stroke="#fff"
                        d="M7 8.5L9.942 10.239C11.657 11.253 12.343 11.253 14.058 10.239L17 8.5"
                        ></path>
                        <path
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        stroke="#fff"
                        d="M2.016 13.476c.065 3.065.098 4.599 1.229 5.734 1.131 1.136 2.705 1.175 5.854 1.254 1.94.049 3.862.049 5.802 0 3.148-.079 4.723-.119 5.854-1.254 1.131-1.135 1.164-2.668 1.229-5.734.021-.986.021-1.966 0-2.951-.065-3.065-.098-4.598-1.229-5.734C19.623 3.655 18.05 3.616 14.901 3.537c-1.94-.049-3.861-.049-5.802 0-3.149.079-4.723.118-5.854 1.254C2.114 5.926 2.081 7.459 2.016 10.524c-.021.986-.021 1.965 0 2.951Z"
                        ></path>
                    </svg>
                    <input
                        placeholder="name@mail.com"
                        title="email"
                        name="email"
                        type="text"
                        className="input_field"
                        id="email_field"
                        value={credentials.email}
                        onChange={(e) => updateFieldHandler('email', e.target.value)}
                    />
                </div>
        
                <div className="input_container">
                    <label className="input_label" htmlFor="password_field">
                        Senha
                    </label>
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                    >
                        <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" className="icon">
                        <path strokeLinecap="round" strokeWidth="1.5" stroke="#fff" d="M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22"></path>
                        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#fff" d="M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"></path>
                        <path fill="#fff" d="M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z"></path>
                        </svg>
                    </svg>
                    <input
                        placeholder="Password"
                        title="senha"
                        name="password"
                        type="password"
                        className="input_field"
                        id="password_field"
                        value={credentials.password}
                        onChange={(e) => updateFieldHandler('password', e.target.value)}
                    />
                </div>
        
                <button title="Sign In" type="submit" className="sign-in_btn" onClick={handleLogin}>
                    <span>Entrar</span>
                </button>
        
                {/* <div className="separator">
                    <hr className="line" />
                        <span>Or</span>
                    <hr className="line" />
                </div>
        
                <button title="Sign In" type="button" className="sign-in_ggl">
                <svg
                    height="18"
                    width="18"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                >
                </svg>
                    Sign in with Google
                </button> */}
            </form>
        </div>
    )
}

export default LoginContainer
