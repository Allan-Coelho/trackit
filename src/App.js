import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoryPage from "./pages/components/HistoryPage/HistoryPage";
import { standardDays } from "./constants/constants";

export default function App() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [percentage, setPercentage] = useState(0);
  const [createCardData, setCreateCardData] = useState({
    name: "",
    days: standardDays,
  });

  console.log(percentage);
  
  return (
    <UserContext.Provider
      value={{
        loginData,
        setLoginData,
        percentage,
        setPercentage,
        createCardData,
        setCreateCardData,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
