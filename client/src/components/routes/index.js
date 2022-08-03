import React from "react";
import { Route, Routes } from "react-router-dom";

import AddFood from "../form";
import Home from "../home";

const ItmemRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addFood" element={<AddFood />} />
      </Routes>
    </div>
  );
};

export default ItmemRoutes;
