import React, { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import {ScrollTrigger}  from 'gsap/ScrollTrigger';
import './Scr.css';



const Scr = () => {
  gsap.registerPlugin(ScrollTrigger)
     
    
      useGSAP(() => {
       
        },
        
      ); 
    
      return (
        <div id="page">
        <main>
         
        </main>
      </div>
      );
    }

   
export default Scr;


