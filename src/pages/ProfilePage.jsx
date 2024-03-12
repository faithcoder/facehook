import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";

export default function ProfilePage() {
  const { state, dispatch } = useProfile();
  const { auth } = useAuth();
  const { api } = useAxios();

  useEffect(() => {
    setLoading(true);
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        setUser(response?.data?.user);
        setPosts(response?.data?.posts);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <h3>Loading Profile Data...</h3>;
  }
  return (
    <div>
      Welcome, {state?.user?.firstName} {user?.lastName}
      <p>You have {state?.posts.length} posts.</p>
    </div>
  );
}
