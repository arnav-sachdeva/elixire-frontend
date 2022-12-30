import React,{ useState } from "react";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);


  

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Bharat Voting Platform
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Voting Rights</a>
          </li>
		  <li className="nav-blog">
            <a href="/">Voting Details</a>
          </li>
		  

		 
		  
        </ul>
		

      </div>
	  <a className="nav-login" href="/">Log in</a>
	  <a className="nav-signup" href="/">Sign up</a>
	 
    </nav>
  );
}
