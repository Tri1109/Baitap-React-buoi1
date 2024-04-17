import React, { useState } from 'react'

const CarState = () => {
    const [carColor, setCarColor] = useState('red-car');

    const changeImage = (imageColor) => {
        setCarColor(imageColor);
    }
  return (
    <div>
        <h3>Change color car</h3>
            <div className='row'>
                <div className='col-4'>
                    <img className='w-100' src={`/img/${carColor}.jpg`} alt='...' />
                </div>
                <div className='col-8'>
                    <button style={{background:'red'}} className='btn mx-2 text-white' onClick={() => setCarColor("red-car")}>Red color</button>
                    <button style={{background:'gray'}} className='btn mx-2 text-white' onClick={() => setCarColor("silver-car")}>Silver color</button>
                    <button style={{background:'black'}} className='btn mx-2 text-white' onClick={() => setCarColor("black-car")}>Black color</button>
                    <button style={{background:'#37384a'}} className='btn mx-2 text-white' onClick={() => setCarColor("steel-car")}>Steel color</button>
                </div>
            </div>
    </div>
    
  )
}

export default CarState