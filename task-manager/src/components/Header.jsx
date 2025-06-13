import React from "react";
import '../components/Header.css'

function Header(){
    return(
        <header>
            <h1>Productivity</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Task Lists</a></li>
                    <li><a href="/">About</a></li>
                </ul> 
            </nav>
            <div class='profile'>
                <button>Login</button>
            </div>
        </header>
    );
}



export default Header;