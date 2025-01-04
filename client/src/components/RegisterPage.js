import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (evt) => {
        evt.preventDefault();
        const user = {username, password};
        fetch('/user/register', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        }).then(() => {
            navigate("/login");
        }).catch(err => console.log(err));
    };


    return (
        <div className="register-page">
            <h1>Register A New Account</h1>
            <form className="register-form" onSubmit={handleRegister}>
                <label for="username">Username:</label>
                <input type="text" name="username" value={username} onChange={(e) => {
                    setUsername(e.target.value);
                }}/><br/>
                <label for="password">Password:</label>
                <input type="password" name="password" value={password} onChange={(e) => {
                    setPassword(e.target.value);
                }}/><br/>
                <button>Register</button>
            </form>
            <Link to="/login" className="link" id="login">Login</Link>
        </div>
    )
}

export default RegisterPage;