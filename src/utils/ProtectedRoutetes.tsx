import { Outlet } from "react-router-dom";
import { useAuth } from "./auth";
import {NotFound} from "../components/pages/NotFound/NotFound";

export const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <NotFound />;
};
