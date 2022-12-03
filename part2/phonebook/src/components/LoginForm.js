import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ username, password, handleLogin, onChangeUsername, onChangePassword }) => {
    return (
        <form onSubmit={handleLogin}>
            <div>
                <h2>Login</h2>
                <div>
                    Username:
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={onChangeUsername}
                    />
                    <br />
                    <br />
                    Password:
                    <input
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={onChangePassword}
                    />
                    <br />
                    <br />
                    <button type="submit">Login</button>
                </div>
            </div>
        </form>
    );
};

LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    onChangeUsername: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
};

export default LoginForm;
