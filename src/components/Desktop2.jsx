//  @ {} ! # $ % ^ & * () + | : " <> ? _ +
import React, { useRef } from 'react'
import image from '../assets/pictures/image.png'
import GradientBox from './GradientBox'
import image2 from '../assets/pictures/image2.png'
import './Desktop2.css'

const Desktop2 = () => {
  const targetDiv=useRef(null);

  const handleChange = (e) => {
    targetDiv.current?.scrollIntoView({behaviour: 'smooth'});
  }

  return (
    <>
        <div className='TopClass'>
            <div className='texts'>Sentiment Analysis</div>
            <div className='texts'>Decode Emotions In Texts</div>
            <div><img width={360} height={50}  src={image} alt="emoji" /></div>
        </div>

        <div className='container'>
            <div className='input gridTexts'>
                <div>Input</div>
                <input type="text" className='inputClass2' />
            </div>
            
            <div className='inputcsv gridTexts'>
                <div>Input CSV</div>
                <input type="file" className=' inputCSV2 '/>
            </div>
        </div>
        
    </>
  )
}
//{<div ref={targetDiv} ><GradientBox/></div>}
export default Desktop2