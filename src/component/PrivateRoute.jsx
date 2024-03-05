import { Navigate } from "react-router-dom";
import React from "react";

import { AuthApi } from "../Context/AuthContextProvider";
function PrivateRoute({ children }) {
  const { auth } = React.useContext(AuthApi);
  // console.log("--> Private Route In", auth);

  if (auth === false) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
