import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
    return (
            <div className="d-flex flex-column min-vh-100">
	<img src="images/bg-image-new.jpg" alt="kawo"/>

	<nav className="navbar navbar-expand-lg bg-none navb"> 
  <a className="navbar-brand" href="index.html">
  	<img src="images/kawo-legal-logo.png" alt="home"/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link" href="index.html" style={{border: "2px solid #c35b48", padding: "5px"}}>Home</Link>
      </li>
      <li className="nav-item active">
        <Link to="/Startups" className="nav-link" href="startups.html">Startups</Link>
      </li>
      <li className="nav-item active">
        <Link to="/Register" className="nav-link" href="register.html">Register</Link>
      </li>
      <li className="nav-item active">
        <Link to="Login" className="nav-link" href="login.html">Login</Link>
      </li>
      </ul>
  </div>
</nav>


<div className="container">
	<div className="row">
		<div className="col-md-3">
			
		</div>
		<div className="col-md-6 intro" align="center">
			<h1 style={{fontsize: "60px"}}>KAWOLEGAL</h1>
			<h3>
				A colaborative ecosystem for problem solvers and support for startups
			</h3>
			<br/>
			<button type="button" class="btn btn-lg btn-primary" disabled><Link to="Register" alt='Broken Link' style={{color: "white"}}>Register Now!</Link></button>
		</div>
		<div className="col-md-3">
		</div>
	</div>
</div>


<footer class="footcss mt-auto">
	
	<div className="container">
		<div className="row">
			<div class="col-md-4">
				<p style={{color: "white", textalign: "left"}}>Ⓒ 2021 Kawo Legal, All Rights Reserved</p>
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
</footer>

<script type="text/javascript" src="js/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="js/bootstrap.bundle.min.js"></script>
</div>
        
    )
}
