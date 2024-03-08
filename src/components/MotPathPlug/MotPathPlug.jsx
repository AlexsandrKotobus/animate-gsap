import React from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import { ReactComponent as Path } from './assets/path.svg';
import { ReactComponent as Planet1 } from './assets/planet1.svg';
import { ReactComponent as Planet2 } from './assets/planet2.svg';
import { ReactComponent as Planet3 } from './assets/planet3.svg';
import { ReactComponent as Comet } from './assets/comet.svg';
import "./MotPathPlug.css"



const MotPathPlug = () => {
gsap.registerPlugin(MotionPathPlugin);
gsap.defaults({ease: "none", repeat: -1}); //
useGSAP(() => {
    gsap.from("#planet1", {
        duration: 10,
        motionPath: {
            path: "#path1",
            align: "#path1",             //
            alignOrigin: [0.5, 0.5],      //
        }
    });
    gsap.to("#planet2", {
        duration: 15,
        motionPath: {
            path: "#path2",
            align: "#path2",             //
            alignOrigin: [0.5, 0.5],      //
        }
    });
    gsap.to("#planet3", {
        duration: 5,
        motionPath: {
            path: "#path3",
            align: "#path3",             //
            alignOrigin: [0.5, 0.5],      //
        }
    });
    gsap.to("#comet", {
        duration: 25,
        motionPath: {
            path: "#path4",
            align: "#path4",             //
            alignOrigin: [0.8, 0.5],      //
            autoRotate: true,
        },
        onUpdate: () => {
            gsap.set("#comet", {rotation: "+=90"})
        }
    });

}, [] );


    return <main>
        <Path/>
        <Planet1 id="planet1" className="planet"/>
        <Planet2 id="planet2" className="planet"/>
        <Planet3 id="planet3" className="planet"/>
        <Comet id="comet" className="comet"/>
    </main>;
}

export default MotPathPlug;
