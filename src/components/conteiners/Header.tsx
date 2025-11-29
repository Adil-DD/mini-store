import {  NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import type { RootState } from "../../store/store";
import Basket from "../ui/Basket"
import ThemeToggle from "../ui/ThemeToggle"
import AuthModal from "./AuthModal";
import { useState } from "react";

export default function Header() {
  const [openModal, setOpenModal] = useState(false)
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  const handleLogout = () => {
    dispatch(logout())
  }

  const linkClick = (isActive: boolean) => isActive ? "text-indigo-600 font-medium" : "text-muted hover:text-indigo-600";

  
  return (<>
  <div className="bg-card shadow-sm sticky top-0 z-10">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center text-default">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-indigo-600">MiniStore</h1>

        <nav className="hidden md:flex ml-10 space-x-8">
          <NavLink to="/" className={({isActive})=> linkClick(isActive)}>
            Главная
          </NavLink>
          <NavLink to="/catalog" className={({isActive})=> linkClick(isActive)}>
            Каталог
          </NavLink>
          <NavLink to="/about" className={({isActive})=> linkClick(isActive)}>
            О нас
          </NavLink>
          <NavLink to="/contacts" className={({isActive})=> linkClick(isActive)}>
            Контакты
          </NavLink>
        </nav>
      </div>


      <div className="flex items-center">
        <Basket/>
        <ThemeToggle />
      </div>

      {isAuthenticated ? (
        <button
          onClick={handleLogout}
          className="btn-destructive px-5 py-2 rounded-full transition"
        >
          Выйти
        </button>
      ) : (
        <button
          onClick={()=> setOpenModal(true)}
          className="btn-primary px-5 py-2 rounded-full transition"
        >
          Войти
        </button>
      )}
        {openModal === true && <AuthModal closeModal={()=>setOpenModal(false)} />}
      </div>
    </div>
  </>
  );
}
