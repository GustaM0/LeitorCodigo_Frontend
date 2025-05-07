const envs = {
    apiUrl: import.meta.env.VITE_API_URL as string,
    apiPort: import.meta.env.VITE_API_URL_PORT as string,
    redirectUrlTest: import.meta.env.VITE_REDIRECT_URL_TEST as string,
};

export default envs;