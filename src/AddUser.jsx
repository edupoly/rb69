import React from "react";

function AddUser() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
    mobile: 0,
    role: "",
  });
  function createUser(user) {
    fetch("http://localhost:4000/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      alert("User added successfully");
    });
  }

  return (
    <div className="mybox">
      <h1>Add User</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(user);
          createUser(user);
        }}
      >
        <label>Username:</label>
        <input
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <br />
        <label>Mobile:</label>
        <input
          type="number"
          value={user.mobile}
          onChange={(e) => setUser({ ...user, mobile: e.target.value })}
        />
        <br />
        <label>Role:</label>
        <input
          type="text"
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
