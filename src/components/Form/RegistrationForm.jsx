import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../auth/firebaseJs";
import { Email } from "@mui/icons-material";
const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => console.log(auth))
      .catch((error) => console.log(error));
  };
  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => console.log(auth))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <form>
        <input
          type="email"
          name="email"
          onChange={(evt) => setEmail(evt.target.value)}
          value={email}
        />

        <input
          type="password"
          name="password"
          onChange={(evt) => setPassword(evt.target.value)}
          value={password}
        />
        <button type="button" onClick={singIn}>
          singin
        </button>
        <button type="button" onClick={register}>
          Singup
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
