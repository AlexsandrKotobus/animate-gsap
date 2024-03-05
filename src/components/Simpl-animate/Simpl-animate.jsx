import React, {useRef, useLayoutEffect} from 'react';
import gsap from 'gsap'
import "./Simpl-animate.css"


const SimplAnimate = () => {
    //

 useLayoutEffect(()=> {
    gsap.to('.box-3', {rotation: 360, delay: 3})
    gsap.to('.box-4', {scale: 2, duration: 3})
  }, []);





    // 2 сближающиеся кнопки по клику
    const boxRef = useRef(null)
    const handleClick= ()=> {
      gsap.fromTo(boxRef.current, {opacity: 0, y: 25}, {opacity: 1, y: 0})
      gsap.fromTo('.box-2', {opacity: 0, y: -25}, {opacity: 1, y: 0})
  
    }
  
    return (
      <div className="App">
        <>
        <div className="wrap" >
          <div className='box-1' ref={boxRef}>Box 1</div>
          <div className='box-2'>Box 2</div>
          <button className='button' onClick ={()=>handleClick()}>Click me</button>
        </div>
        <div className="wrap">
            <div className="box-3">box-3</div>
            <div className="box-4">box-4</div>
        </div>
        </>
      </div>
    );
  }
  


export default SimplAnimate;
