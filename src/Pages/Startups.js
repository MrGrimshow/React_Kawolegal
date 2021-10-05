import React from 'react'
import { Link } from "react-router-dom";

export default function Startups() {
    return (
        
            <div className="d-flex flex-column min-vh-100">

<nav className="navbar navbar-expand-lg bg-none navb2">
  <a className="navbar-brand" href="index.html">
  	<img src="images/kawo-legal-logo.png" alt="kawo"/>
  </a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>


  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto" style={{color: "#77bed8"}}>
      <li className="nav-item active">
        <Link to="/" className="nav-link" href="index.html">Home</Link>
      </li>
      <li className="nav-item active">
        <Link to="Startups" className="nav-link" href="startups.html" style={{border: "2px solid #c35b48", padding: "5px"}}>Startups</Link>
      </li>
      <li className="nav-item active">
        <Link to="Register" className="nav-link" href="register.html">Register</Link>
      </li>
      <li className="nav-item active">
        <Link to="Login" className="nav-link" href="login.html">Login</Link>
      </li>
      </ul>
  </div>
</nav>


<div class="container">
	<div class="row search">
		<div className="col-md-12">
			<form className="example" action="action_page.php">
			  <input type="text" placeholder="Search startups by name or industry" name="search"/>
			  <button type="submit"><i class="fa fa-search"></i> Search</button>
			</form>
		</div>
	</div>
    <br/>
    <br/>
	<div class="row colstyl">
		<div className="col-md-2">
			<img src="images/image_3.png" alt="kawo"/>
		</div>
		<div className="col-md-10 " style={{paddingleft: "30px;"}}>
			<h2>
				Think And Zoom
			</h2>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut.</p>

			<button type="button" className="btn btn-outline-secondary" style={{fontsize: "13px"}}>See full details</button>
		</div>
		
	</div>

	<div className="row colstyl">
		<div className="col-md-2">
			<img src="images/image_4.png" alt="kawo"/>
		</div>
		<div className="col-md-10 " style={{paddingleft: "30px"}}>
			<h2>
				Slate Cube
			</h2>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut.</p>

			<button type="button" className="btn btn-outline-secondary" style={{fontsize: "13px;"}}>See full details</button>
		</div>
		
	</div>

	<div class="row colstyl">
		<div className="col-md-2">
			<img src="images/image_5.png" alt="kawo"/>
		</div>
		<div className="col-md-10 " style={{paddingleft: "30px;"}}>
			<h2>
				Sleek Job Accademy
			</h2>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut.</p>

			<button type="button" className="btn btn-outline-secondary" style={{fontsize: "13px;"}}>See full details</button>
		</div>
		
	</div>
	
	
</div>


<footer className="footcss mt-auto">	
	<div className="container">
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
