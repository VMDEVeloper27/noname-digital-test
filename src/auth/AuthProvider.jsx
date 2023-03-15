import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../auth/firebaseJs";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
export default function AuthProvider() {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);
  useEffect(() => {
    auth.onAuthStateChanged();
  }, []);
  return user != null ? <>{user.displayName}</> : <>loading</>;
}
