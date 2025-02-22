import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
    // TODO: handle login successful/failed cases
    // TODO: implement login session
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (evt) => {
        evt.preventDefault();
        const user = {username, password};
        fetch('/user/login', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        }).then(() => {
            navigate("/");
        }).catch(err => console.log(err));
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