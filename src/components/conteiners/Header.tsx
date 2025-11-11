import { Link, NavLink } from "react-router-dom";

import Basket from "../ui/Basket"
import AuthModal from "./AuthModal";
import { useState } from "react";

export default function Header() {
  const [openModal, setOpenModal] = useState(false)


  const linkClick = (isActive: boolean) => isActive ? "text-indigo-600 font-medium" : "text-gray-600 hover:text-indigo-600";

  
  return (<>
  <div className="bg-white shadow-sm sticky top-0 z-10">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
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


      <Basket/>

      {/* <Link to='/login' className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition">
        Войти
      </Link> */}
      <button
        onClick={()=> setOpenModal(true)}
      >
        Войти
      </button>
        {openModal === true && <AuthModal closeModal={()=>setOpenModal(false)} />}
      </div>
    </div>
  </>
  );
}
