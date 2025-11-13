import { useSelector } from "react-redux"
import { Outlet } from "react-router"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"

const Layouts = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  return (
    <div className="">
        <Header />
        <main className="min-h-screen">
          <div className={`float-left w-1/4 ${isSidebarOpen ? 'block' : 'hidden'}`}>
            <Sidebar />
          </div>
          <div className={`float-left ${isSidebarOpen ? 'w-3/4' : 'w-full'}`}>
            <Outlet />
          </div>
        </main>
        <Footer />
    </div>
  )
}

export default Layouts