import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Family Chat</span>
        <span className="title">Bejelentkezés</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Add meg az email címed" />
          <input type="password" placeholder="Adj meg egy jelszót" />
          <button>Bejelentkezés</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          Nincs még fiókod? <Link to="/register">Regisztráció</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
