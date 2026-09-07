import React, { useContext, useState } from "react";
import { GlobalVar } from "../Global";
import {  useNavigate } from "react-router-dom";
import './create.css'
function Index() {
  const navigate=useNavigate()
  const { account, setAccount } = useContext(GlobalVar);
  const [form, setform] = useState({
    username: "",
    password: "",
  });
  const { username, password } = form;
  const handler = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const submit = () => {
    setAccount([...account, form]);
    setform({
      username: "",
      password: "",
    });
    navigate('/login')
  };
  return (
    <div className="register-page">
      <div className="register-form">
        <input
          type="text"
          value={username}
          name="username"
          placeholder="username"
          onChange={handler}
        />
        <br />
        <br />

        <input
          type="text"
          value={password}
          name="password"
          placeholder="password"
          onChange={handler}
        />
        <br />
        <br />
        <button onClick={submit}>create</button>
      </div>

    </div>
  );
}

export default Index;
