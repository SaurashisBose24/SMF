//  @ {} ! # $ % ^ & * () + | : " <> ? _ +
import React from 'react'
import image from '../assets/pictures/image.png'
import image2 from '../assets/pictures/image2.png'
import './Desktop2.css'

const Desktop2 = () => {
  return (
    <>
        <div className='flex flex-col justify-center items-center'>
            <div className='texts'>Sentiment Analysis</div>
            <div className='texts'>Decode Emotions In Texts</div>
            <div><img width={360} height={159} className='top-0.5 bottom-0.5' src={image} alt="emoji" /></div>
        </div>

        <div className='container'>
            <div className='input gridTexts'>
                <div>Input</div>
                <input type="text" className='rounded-md bg-slate-300 w-40 h-5 ' />
            </div>
            <div className='output gridTexts'>
                <div>Output</div>
                <input type="text" className='rounded-md bg-slate-300 w-40 h-5' />
            </div>
            <img className='picture' src={image2} alt="" />
            <div className='inputcsv gridTexts'>
                <div>Input CSV</div>
                <input type="file" className='rounded-md bg-slate-300 w-70 text-base font-serif ' />
            </div>
            <div className='graph gridTexts'>
                <div>Graph</div>
            </div>
        </div>

    </>
  )
}

export default Desktop2