import { useDispatch } from "react-redux";
import { toggleSidebar } from "../features/toggle/sidebarSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleSidebar1 = () => {
 // lấy từ redux action để toggle sidebar
    dispatch(toggleSidebar());
  }
  return (
    <div>
      Header
      <button onClick={toggleSidebar1}>Toggle Sidebar</button>
    </div>
  )
}

export default Header