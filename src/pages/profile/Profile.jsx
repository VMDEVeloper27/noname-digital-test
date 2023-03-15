import { auth } from "../../auth/firebaseJs";
import { useAuthState } from "react-firebase-hooks/auth";
import ProffileCard from "../../components/profile/Profile";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) {
      navigate("/singup");
    }
  }, [user]);
  return (
    <section>
      <div>
        well-come: {user?.email}
        {user ? <ProffileCard /> : ""}
        {user && (
          <button type="button" onClick={() => auth.signOut()}>
            Logout
          </button>
        )}
      </div>
    </section>
  );
};
export default Profile;
