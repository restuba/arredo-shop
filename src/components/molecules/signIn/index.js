import { React, useState } from "libraries";
import { login } from "services";
import { validateEmail } from "utils";
import { Wrapper } from "./style";

const Index = ({ active }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    if (!email || !password) {
      return alert("Formulir tidak boleh kosong");
    }

    if (!validateEmail(email)) {
      return alert("Email tidak valid");
    }

    try {
      await login({ email, password });
      alert("Berhasil login");
    } catch (err) {
      alert("Gagal login");
      throw err;
    }
  };

  return (
    <Wrapper
      className={`form-container sign-in-container ${active ? "isActive" : ""}`}
    >
      <form className="form" action="#" onSubmit={handleFormSubmit}>
        <h1 className="form-title">Welcome Back!</h1>
        <input
          type="email"
          placeholder="Sign in with email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="form-button">sign in</button>
        {/* <a className="find-password" href="#">
          Forgot password?
        </a> */}
      </form>
    </Wrapper>
  );
};

export default Index;
