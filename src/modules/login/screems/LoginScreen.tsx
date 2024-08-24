const LoginScreen = () => {
    const { login, loading, error } = useAuth();

    const handleLogin = () => {
        login();
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin} disabled={loading}>
                Login
            </button>
            {error && <p>{error}</p>}
        </div>
    );
};
export default LoginScreen;
