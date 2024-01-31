import { FormEventHandler, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useSignUpMutation } from "../../features/apiSlice";
import { setToken } from "../../redux/authSlice";

export const useHook = (): any => {
  const [signUp, { data, error, isLoading }] = useSignUpMutation();
  const [errMsg, setErrMsg] = useState("");
  // let cachedChat = useSelector((state) => state.chatAndMessages);
  // let activeChatId = useSelector((state) => state.activeChat);
  const dispatch = useDispatch();
  // let getChatTab = useGetChatTabQuery();
  // const { data, isLoading, refetch } = useChat();
  const handleSignUp = async (formData: FormEventHandler<HTMLFormElement>) => {
    // try {
    // const response = await signUp(formData);
    // } catch (err) {
    //   if (err.status == 500) {
    //     if (err.data.msg.contains("E11000")) {
    //     }
    //   }
    // }
  };
  useEffect(() => {
    dispatch(setToken(data?.token));
  }, [data]);

  return { data, isLoading, error, handleSignUp, errMsg, setErrMsg };
};
