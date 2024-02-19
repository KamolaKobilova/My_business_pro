import { FormEventHandler, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetAppointmentsQuery, useSignInMutation } from "../../features/apiSlice";
// import { changeStatus, getChatList } from "./redux/chatListReducer";
import { setToken } from "../../redux/authSlice";
interface SignInFormData {
    token: string,
    user: any
}
export const useHook = () => {
    const [signIn, { data, error, isLoading }] = useSignInMutation();



    const dispatch = useDispatch();
   
    const handleSignIn = async (formData: FormEventHandler<HTMLFormElement>) => {
        signIn(formData);
    }
    useEffect(() => {
        dispatch(setToken(data.token))
    }, [data])
    
    return { data, isLoading, handleSignIn };
};