import React from "react";
import { FaHome, FaFolder, FaVideo } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-menu">
      <ul>
        <li><a href="#"><FiMenu />   Menu</a></li>
        <li><a href="#"><FaHome />   Home</a></li>
        <li><a href="#"><FaFolder />   Photo</a></li>
        <li><a href="#"><FaVideo />   Video</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;