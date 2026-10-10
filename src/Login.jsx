import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "./userSlice";

function Login() {
  var [user, setUser] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  function loginUser(e) {
    e.preventDefault();
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.localStorage.setItem("token", data.token);
        dispatch(setToken(data.token));
      });
  }

  return (
    <div className="mybox">
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          loginUser(e);
        }}
      >
        UserName:
        <input
          type="text"
          name="username"
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
        />
        <br />
        Password:
        <input
          type="text"
          name="password"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
