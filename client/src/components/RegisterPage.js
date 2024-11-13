import { useState } from "react";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (evt) => {
        // TODO
    }


    return (
        <div className="register-page">
            <h1>Login To Your Account</h1>
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
            <a href='/login' className="link">Login</a>
        </div>
    )
}

export default RegisterPage;