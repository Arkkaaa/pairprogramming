import { useState } from "react";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const createUser = async () => {
      const role = "admin";
      const response = await fetch("http://localhost:4000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword,
          role,
        }),
      });
      const data = await response.json();
      console.log(data);
    };
    if (password === confirmPassword) {
      createUser();
      console.log("user created");
    } else {
      console.log("passwords do not match");
    }
  };
  return (
    <div className="login-page">
      <h2>Register</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Username</label>
        <input
          value={username}
          name="name"
          id="name"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="******"
          id="password"
          name="password"
        />
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="******"
          id="confirmPassword"
          name="confirmPassword"
        />

        <button className="submit-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
