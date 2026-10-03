import { useState } from "react";
import { useNavigate } from "react-router";
function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      email,
      username,
      password,
      role,
    };
    console.log(newUser);
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const result = await response.json();

    navigate("/login");
  };
  return (
    <>
      <div
        style={{ border: "1px solid blue", height: "100vh", display: "flex" }}
      >
        <form
          style={{
            border: "1px solid black",
            height: "500px",
            width: "500px",
            margin: "auto auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="username">Username:</label>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="Role">Role:</label>
            <br />
            <select
              name="role"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value=""> --Pilih Role-- </option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <button type="submit" style={{ width: "100px" }}>
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
