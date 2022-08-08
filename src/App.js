import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import TodayPage from "./pages/TodayPage/TodayPage";

export default function App() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  return (
    <UserContext.Provider value={{ loginData, setLoginData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
