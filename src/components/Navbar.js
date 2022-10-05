import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{

    return(

        <div className="border-b-4 border-green-500 text-end fixed top-0 w-full bg-indigo-300 
        font-bold text-lg text-white">
    
            <ul>
                <li className="inline-block pt-4 pb-4">
                    <Link to="/" className='pl-6 pr-8'>
                        Home
                    </Link>
                </li>
                <li className="inline-block pt-4 pb-4">
                    <Link to="/about" className='pl-6 pr-8'>
                        About
                    </Link>
                </li>
                <li className="inline-block pt-4 pb-4">
                    <Link to="/articlesList" className='pl-6 pr-8'>
                        Articleslist
                    </Link>
                </li>
            </ul>
         
        </div>
    );
};

export default Navbar;