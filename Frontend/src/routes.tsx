
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './assets/Authentication Pages/loginpage/loginview';
import RegisterView from './assets/Authentication Pages/registerpage/registerview';
import App from "./App.tsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
