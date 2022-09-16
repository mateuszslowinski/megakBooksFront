import {useSelector} from "react-redux";
import {RootState} from "../app/store";


export const useAuth = ()=>{
    const {userInfo} = useSelector((store:RootState)=> store.users)
    return !userInfo ? false : userInfo.isAdmin
}