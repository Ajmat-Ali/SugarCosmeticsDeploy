import { Routes, Route } from "react-router-dom";

// Loxcal Page Or Component
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import SingleItem from "../pages/SingleItem";
import NotFound from "../pages/NotFound";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products/:paramId"
          element={
            <PrivateRoute>
              <SingleItem />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
