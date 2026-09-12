import React from 'react';
import Logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <nav className="flex justify-between container mx-auto mt-5">
            <img src={Logo} alt="" />

        <ul className="flex gap-4 items-center">
            <li><span className="text-[#DB2777]">Home</span></li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className="flex gap-4 items-center">
            <button>Sign In</button>
            <button className="rounded-3xl bg-[#DB2777] px-3 py-1 text-white">Sign Up</button>
        </div>
            
            
        </nav>
    );
};

export default Nav;