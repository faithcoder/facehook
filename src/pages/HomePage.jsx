import { Link } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
export default function HomePage() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <>
      <div>Home page</div>
      <Link to="/me">Go to Profile page</Link>
    </>
  );
}
