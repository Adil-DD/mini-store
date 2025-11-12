import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import Login from "../pages/Login";
import RegisterForm from "../pages/RegisterForm";

export default function AuthModal({ closeModal }: { closeModal: () => void }) {
  const [tab, setTab] = useState<"login" | "register">("login")
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
  
  useEffect(() => {
    if (isAuthenticated) {
      closeModal()
    }
  }, [isAuthenticated, closeModal])
  
  return (
    <div className="fixed flex inset-0 justify-center items-center bg-black/50 z-20">
      <div className="w-[500px] bg-white justify-center p-6 rounded-2xl relative shodow-md">
        <button onClick={closeModal} className="absolute right-3 top-3">✕</button>
        <div className="flex justify-between w-full px-20">
          <button
            onClick={() => setTab("login")}
            className={`px-4 py-2 ${tab === "login" ? "border-b-2 border-blue-600 font-bold" : "text-gray-500"}`}
          >
            Вход
          </button>
          <button
            onClick={() => setTab("register")}
            className={`px-4 py-2 ${tab === "register" ? "border-b-2 border-blue-600 font-bold" : "text-gray-500"}`}
          >
            Регистрация
          </button>
        </div>
        {tab === "register" ? <RegisterForm/> : <Login/>}
      </div>
    </div>
  );
}
