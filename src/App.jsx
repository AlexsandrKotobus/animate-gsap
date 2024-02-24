import React, {useRef} from 'react';
import gsap from 'gsap'
import './App.css';

function App() {
  const boxRef = useRef(null)
  const handleClick= ()=> {
    gsap.fromTo(boxRef.current, {opacity: 0, y: 25}, {opacity: 1, y: 0})
    gsap.fromTo('.box-2', {opacity: 0, y: -25}, {opacity: 1, y: 0})

  }

  return (
    <div className="App">
      <>
      <div className="App" >
        <div className='box-1' ref={boxRef}>Box 1</div>
        <div className='box-2'>Box 2</div>
        <button className='button' onClick ={()=>handleClick()}>Click me</button>
      </div>
      </>
    </div>
  );
}

export default App;

