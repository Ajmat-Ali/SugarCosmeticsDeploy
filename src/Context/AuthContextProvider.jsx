import React, { useState } from "react";

export const AuthApi = React.createContext();

function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const loginData = JSON.parse(localStorage.getItem("loginData"));

  const Auth = {
    auth,
    setAuth,
  };
  return <AuthApi.Provider value={Auth}>{children}</AuthApi.Provider>;
}

export default AuthContextProvider;
