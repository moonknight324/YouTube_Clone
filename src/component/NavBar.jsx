import React from 'react'
// import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/y1.webp"
import { FaMicrophone } from "react-icons/fa6";
import { RiVideoAddLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

export default function NavBar() {

  return (

    <nav>
        <div className='nav-1' >
            <div className="nav-components" id='hamburger'>
                <GiHamburgerMenu className='icons hamburger icon1 '/>
            </div>
            <div className="nav-components">
                <img className='youtube-logo ' src= {logo} alt="" />
            </div>
            <div>
                <h2 className='youtube-text '>YouTube</h2>
            </div>
            <div className="in-div">
                <p className='in' >IN</p>
            </div>
        </div>

        <div className='nav-2'>

            <div className="nav-components">
                <input className='search-bar' id='search-bar' placeholder='Search' type="text" />
            </div>
            <div className="search-icon">
             <IoIosSearch className='icons' />
            </div>
            <div className="nav-components microphone">
                <FaMicrophone className='icons '/>
            </div>

        </div>

        <div className='nav-3'>

            <div className="nav-components icon1 round">
                <RiVideoAddLine className='icons ' />
            </div>
            <div className="nav-components icon1 flex round">
                <div className='bell flex' >
                <FaRegBell className='icons  ' />
                <div className='bell-span'>
                    <span >9+</span>
                </div>
                </div>
            </div>
           
            <div className="nav-components profile-image icon1">
                <div className='profile-im' >
                    {/* <img src="" alt="" /> */}
                    <h3 className='flex b' >b</h3>
                </div>
            </div>

        </div>

    </nav>



  )
}
