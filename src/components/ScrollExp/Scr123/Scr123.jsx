import React from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

import {ScrollTrigger}  from 'gsap/ScrollTrigger';

import './Scr123.css';



const Scr123 = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".container",
              start: "top 8px",
              end: "+=800", // pin for 800 pixels worth of scroll
              scrub: true,
              pin: true
            }
          });
          
          tl.from(".box", {
            visibility: "hidden",
            duration: 0.01, // just a tiny amount of duration so it's like a toggle since visibility isn't really animatable. 
            stagger: 0.5 // stagger the starting time of each subsequent reveal
          });
          
          // create a proxy object so we can tween the numeric value and plug it into the amount element's innerText using an onUpdate()
          let amountProxy = {value: 0},
              amountEl = document.querySelector(".amount");
          tl.to(amountProxy, {
            value: 800,
            onUpdate: () => amountEl.innerText = "$" + formatNumber(amountProxy.value, 2),
            duration: tl.duration(), // just match however long the entire timeline is at this point (it's only populated with the visibility toggles, so it'll stretch to fit those exactly)
            ease: "none"
          }, 0) // <- position parameter places it at the very start of the timeline, so it overlaps with the toggling visibility stuff.
          
          
          // a helper function for formatting a number - it adds commas and forces a certain number of decimal places.
          function formatNumber(value, decimals) {
            let s = (+value).toLocaleString('en-US').split(".");
            return decimals ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals) : s[0];
          }

    }, [])
    

    // 
    return (
        <div className="container">
            <div className='bar'>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
        </div>
        <div class="amount">$0.00</div>

        </div>
        
    );
}

export default Scr123;
