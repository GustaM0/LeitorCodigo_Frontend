import { useEffect } from "react";

const Redirect = () => {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");

        if (code) {
            window.opener.postMessage({ code }, "*");
            window.close();
        } else {
            setTimeout(() => {
                window.close();
            }, 4000);
        }
    }, []);

    return <div>Redirecionando...</div>;
}

export default Redirect