import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";
import { useAuth } from "../../hooks/useAuth";

export default function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const handleLogout = () => {
    // localStorage.clear();
    setAuth({});
    navigate("/login");
  };
  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={LogoutIcon} />
    </button>
  );
}
