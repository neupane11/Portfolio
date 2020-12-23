import React from 'react'

import { FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

const  Socialmediaicon=() =>{
    return (
        
      <div>
        <ul style={iconStyle}>
            <li><a href="https://github.com/neupane11"><FaGithub color="rgb(82, 95, 167) "/></a></li>
            <li><a href="https://www.linkedin.com/in/sandip-neupane-56051b17a/"><FaLinkedin color="rgb(0, 160, 220) " /></a></li>
            <li><a href="https://www.linkedin.com/in/sandip-neupane-56051b17a/"><FaFacebook color="RGB(59, 89, 152)" /></a></li>
            <li><a href="https://www.linkedin.com/in/sandip-neupane-56051b17a/"><FaInstagram color="RGB(138, 58, 185)" /></a></li>
            <li><a href="https://www.linkedin.com/in/sandip-neupane-56051b17a/"><FaTwitter color="RGB(0, 172, 237)" /></a></li>
            
        </ul>
       
      </div>
    
    )
}

const iconStyle={
    listStyle: "none",
    margin: "10 px",
    padding: 0,
    display: "inline-flex",
    
}
export default Socialmediaicon;
