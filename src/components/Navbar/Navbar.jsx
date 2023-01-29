import React from 'react'
import './Navbar.css'
import {FaSearch} from "react-icons/fa"
import {CgProfile} from "react-icons/cg"
import { useStateProvider } from "../../utils/StateProvider";

export default function Navbar({ navBackground }) {
  const [{ userInfo }] = useStateProvider();
  return (
    <div className={navBackground ? "navbar-main .active" : "navbar-main"}>
      <div className="search-bar">
        <FaSearch/>
        <input type="text" placeholder="Search for Artists, Songs, or Podcasts"/>
      </div>
      <div className="avatar">
        <a href={userInfo?.userUrl} className='navbar-a'>
          <CgProfile />
          <span className='span-nav'>{userInfo?.userName}</span>
        </a>
      </div>


   </div>
  )
}
