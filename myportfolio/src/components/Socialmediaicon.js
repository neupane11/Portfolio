import React from 'react'

import { FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

const  Socialmediaicon=() =>{
    return (
        
      <div>
        <ul style={iconStyle}>
            <li><a href="https://github.com/neupane11"><FaGithub color="bd2c00"/></a></li>
            <li><a href="https://www.linkedin.com/in/sandip-neupane-56051b17a/"><FaLinkedin color="0077B5" /></a></li>
            <li><a href="https://www.linkedin.com/in/sandip-neupane-56051b17a/"><FaFacebook color="3b5998" /></a></li>
            <li><a href="https://www.linkedin.com/in/sandip-neupane-56051b17a/"><FaInstagram color="c13584" /></a></li>
            <li><a href="https://www.linkedin.com/in/sandip-neupane-56051b17a/"><FaTwitter color="1da1f2" /></a></li>
            
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
