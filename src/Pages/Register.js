import React from 'react'
import { Link } from "react-router-dom";

export default function Register() {
    return (
            <div className="d-flex flex-column min-vh-100">

<nav className="navbar navbar-expand-lg bg-none navb2">
  <a className="navbar-brand" href="#register.html">
  	<img src="images/kawo-legal-logo.png" alt="text"/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link" href="index.html">Home</Link>
      </li>
      <li className="nav-item active">
        <Link to="Startups" className="nav-link" href="startups.html" >Startups</Link>
      </li>
      <li class="nav-item active">
        <Link to="register" className="nav-link" href="register.html" style={{border: "2px solid #c35b48", padding: "5px"}}>Register</Link>
      </li>
      <li class="nav-item active">
        <Link to="Login" class="nav-link" href="login.html">Login</Link>
      </li>
      </ul>
  </div>
</nav>
<br/>

<div class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 form-content">
                <h3>Join KawoLegal. Sign up to get your Startup listed now!</h3>
                <br/>
                <form action="">
                    <h5>Full Name</h5>
                    <input type="text" name="name" placeholder="Full Name"/><br/>
                    <h5>Email</h5>
                    <input type="email" name="email" placeholder="Email"/><br/>
                    <h5>Password</h5>
                    <input type="password" name="password" placeholder="Password"/><br/>
                    <h5>Confirm Password</h5>
                    <input type="password" placeholder="Confirm Password"/><br/>
                </form>
                <div class="btn btnreg">
                    <button type="submit">Sign up</button>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>

<footer className="footcss mt-auto">	
	<div class="container">
		<div className="row">
			<div className="col-md-4">
				<p style={{color: "white", textalign: "left"}}>Ⓒ 2021 Kawo Legal, All Rights Reserved</p>
			</div>
			<div className="col-md-4"></div>
			<div className="col-md-4">
				<ul className="ulstyl">
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


</footer>

<script type="text/javascript" src="js/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="js/bootstrap.bundle.min.js"></script>
        </div>
    )
}
