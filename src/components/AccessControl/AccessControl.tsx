// import { useAuth } from "../../context/AuthContext"
import { useActiveUser } from "../../context/UserContext";

const AccessControl = ({ aceptedRoles, children }: any) => {
    // const { user } = useAuth();
    const { user } = useActiveUser();
    if (!user) return;
    if (!aceptedRoles.includes(user.role)) return;
    return (
        <>
            {children}
        </>
    )
}

export default AccessControl
