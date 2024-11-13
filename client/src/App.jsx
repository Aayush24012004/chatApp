import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Auth from "./views/auth";
import Chat from "./views/chat";
import Profile from "./views/profile";
const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
