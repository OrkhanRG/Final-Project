import React from 'react'
import '../css/Login.css'

function Login() {


    return (
        <div class="wrapper login">
            <div class="container">
                <div class="col-left">
                    <div class="login-text">
                        <h2>Welcome!</h2>
                        <p>Create your account.<br />For Free!</p>
                        <a href="/login" class="btn">Sign Up</a>
                    </div>
                </div>

                <div class="col-right">
                    <div class="login-form">
                        <h2>Login</h2>
                        <form action="">
                            <p>
                                <label>Username/Email address<span>*</span></label>
                                <input type="text" placeholder="Username or Email" required></input>
                            </p>
                            <p>
                                <label>Password<span>*</span></label>
                                <input type="password" placeholder="Password" required></input>
                            </p>
                            <p>
                                <input type="submit" value="Sign In"></input>
                            </p>
                            <p>
                                <a href="/login">Forgot password?</a>
                            </p>

                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Login