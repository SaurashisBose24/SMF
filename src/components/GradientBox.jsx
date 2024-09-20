//  @ {} ! # $ % ^ & * () + | : " <> ? _ +
import React from 'react'
import './GradientBox.css'

const GradientBox = () => {
  const handleChange = () => {
    const d=document.getElementById('color-box');
    d.classList.toggle('active');
    d.style.setProperty('--active-bg-color','#93c47d');
  }
  return (
    <>
        <button onClick={handleChange}>Click me</button>
        <div className='colorBox Box' id='color-box'><div className='content'>Hello</div></div>
        <div> Hello </div>
    </>
  )
}

export default GradientBox