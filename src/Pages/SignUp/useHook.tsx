import { FormEventHandler, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useSignUpMutation } from "../../features/apiSlice";
import { setToken } from "../../redux/authSlice";

export const useHook = (): any => {
  const [signUp, { data, error, isLoading }] = useSignUpMutation();
  const [errMsg, setErrMsg] = useState("");
  const dispatch = useDispatch();

  const handleSignUp = async (formData: FormEventHandler<HTMLFormElement>) => {
  
  };
  useEffect(() => {
    dispatch(setToken(data?.token));
  }, [data]);

  return { data, isLoading, error, handleSignUp, errMsg, setErrMsg };
};
