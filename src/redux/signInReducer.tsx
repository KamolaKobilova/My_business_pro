interface SignInState {
  redirectToHome: boolean;
}

export const initialState: SignInState = {
  redirectToHome: false,
};

const signInReducer = (
  state: SignInState = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case "SET_REDIRECT_TO_HOME":
      return { ...state, redirectToHome: action.payload };
    default:
      return state;
  }
};

export default signInReducer;
