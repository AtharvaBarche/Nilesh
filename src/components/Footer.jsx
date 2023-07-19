import React from "react";
import { FaInstagram  } from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaFacebookF}from "react-icons/fa";
import {FaWhatsapp}from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Footer(){
  return(<div className="footer">
    <footer className="bg-dark text-center text-white">

      <div className="container p-4 pb-0">
       
        <section className="mb-4">
        
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/profile.php?id=100094528952495" role="button"><FaFacebookF /></a>
    
         
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FaInstagram /></a>
    
         
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FaLinkedinIn /></a>
    
         
          <a className="btn btn-outline-light btn-floating m-1" href=" https://wa.me/qr/L7O2PMXICFXCP1 " role="button"><FaWhatsapp /></a>

          <a className="btn btn-outline-light btn-floating m-1" href="nileshjadham21@gmail.com" role="button"><AiOutlineMail /></a>
    
        </section>
    
      </div>
      
    
     
      <div className="footer-text text-center p-3" >
        © 2020 Copyright:
        <a className="text-white" href="">Atharva Barche</a>
      </div>

    </footer>
   </div>
);
}

export default Footer;