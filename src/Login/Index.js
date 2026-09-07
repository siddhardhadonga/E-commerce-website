import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { GlobalVar } from "../Global";
function Index() {
  const { account, isLogin, setIsLogin } = useContext(GlobalVar);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = form;
  const handler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const login = () => {
    let existed = account.find(
      (i) => i.username === username && i.password === password,
    );
    setIsLogin(existed);
  };
  const logout = () => {
    setIsLogin(null);
  };
  return (
    <div className="main">
      <div className="input">
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handler}
        />
        <br />
        <br />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={handler}
        />
        <br />
        <br />
        <Link to="/register">create an account</Link>
        <br />
        <button onClick={!isLogin ? login : logout}>
          {!isLogin ? "login " : "logout"}
        </button>
      </div>
    </div>
  );
}

export default Index;
