import Header from "../components/common/Header";
import { useAuth } from "../hooks/useAuth";
export default function HomePage() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <>
      <Header />
    </>
  );
}
