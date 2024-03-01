import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";

export default function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // localStorage.clear();
    navigate("/login");
  };
  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={LogoutIcon} />
    </button>
  );
}
