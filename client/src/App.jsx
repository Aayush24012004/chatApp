import { Route } from "lucide-react";
import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Auth from "./views/auth";
const app = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};
export default app;
