import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (evt) => {
        // TODO
    }

    return (
        <div className="login-page">
            <h1>Login To Your Account</h1>
            <form className="login-form" onSubmit={handleLogin}>
                <label for="username">Username:</label>
                <input type="text" name="username" value={username} onChange={(e) => {
                    setUsername(e.target.value);
                }}/><br/>
                <label for="password">Password:</label>
                <input type="password" name="password" value={password} onChange={(e) => {
                    setPassword(e.target.value);
                }}/><br/>
                <button>Login</button>
            </form>
            <Link to="/register" className="link" id="register">Register</Link>
        </div>
    )
}

export default LoginPage;