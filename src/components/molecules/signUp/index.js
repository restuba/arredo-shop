import { React, useState } from "libraries";
import { register } from "services";
import { handleAsync, validateEmail } from "utils";
import { Wrapper } from "./style";

const Index = ({ active }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!fullname || !email || !password || !confirmPass) {
      return alert("Formulir tidak lengkap");
    }

    if (!validateEmail(email)) {
      return alert("Email tidak valid");
    }

    if (password !== confirmPass) {
      return alert("Kata sandi tidak cocok!");
    }

    const payload = {
      name: fullname,
      email,
      password,
    };

    // eslint-disable-next-line no-unused-vars
    const [res, err] = await handleAsync(register(payload));
    return res;
  };

  return (
    <Wrapper
      className={`form-container sign-up-container ${active ? "isActive" : ""}`}
    >
      <form className="form" action="#" onSubmit={handleFormSubmit}>
        <h1 className="form-title">Hello, Friend!</h1>
        <input
          type="text"
          placeholder="Fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        <button className="form-button">sign up</button>
      </form>
    </Wrapper>
  );
};

export default Index;
