import React from 'react'
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div class="d-flex flex-column min-vh-100">

            <nav class="navbar navbar-expand-lg bg-none navb2">
            <a class="navbar-brand" href="index.html">
                <img src="images/kawo-legal-logo.png" alt="kawo"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link to="/" class="nav-link" href="index.html">Home</Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="Startups" class="nav-link" href="startups.html">Startups</Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="Register" class="nav-link" href="register.html">Register</Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="Login" class="nav-link" href="login.html" style={{ border: "2px solid #c35b48", padding: "5px"}}>Login</Link>
                    </li>
                </ul>
            </div>
        </nav><br /><div class="container">
                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-8 form-content">
                        <h3>Already a Member? Login to add your Startup.</h3>
                        <br />
                        <form action="">
                            <h5>Email</h5>
                            <input type="email" name="email" placeholder="Email" /><br />
                            <h5>Password</h5>
                            <input type="password" name="password" placeholder="Password" /><br />

                        </form>
                        <div class="btn btnreg">
                            <button type="submit">Sign up</button>
                        </div>
                    </div>
                    <div class="col-md-2"></div>
                </div>
            </div><footer className="footcss mt-auto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <p style={{color: "white" }}>Ⓒ 2021 Kawo Legal, All Rights Reserved</p>
                        </div>
                        <div class="col-md-4"></div>
                        <div class="col-md-4">
                            <ul class="ulstyl">
                                <li>
                                    <i className="fab fa-facebook-f"></i>
                                </li>
                                <li>
                                    <i className="fab fa-twitter"></i>
                                </li>
                                <li>
                                    <i className="fab fa-linkedin-in"></i>
                                </li>
                                <li>
                                    <i className="fab fa-instagram"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </footer><script type="text/javascript" src="js/jquery-3.6.0.min.js"></script><script type="text/javascript" src="js/bootstrap.bundle.min.js"></script>
</div>
    )
}
