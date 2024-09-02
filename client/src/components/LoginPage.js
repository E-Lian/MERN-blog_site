const LoginPage = () => {
    return (
        <div className="login-page">
            <h1>Login To Your Account</h1>
            <form className="login-form">
                <label for="account">Account:</label>
                <input type="text" name="account"/>
                <label for="password">Password:</label>
                <input type="password" name="password"/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage;