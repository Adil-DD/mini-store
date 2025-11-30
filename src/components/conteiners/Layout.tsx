import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-card text-default">
      <Header />
      <div className="flex-1 container mx-auto">
        <Outlet />
      </div>

      <Footer />
    </div>
  ) 
}
