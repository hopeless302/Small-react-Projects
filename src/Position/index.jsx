import React from 'react'

function Positions() {
  return (
    <div className='flex flex-col justify-between h-screen overflow-hidden'>
        <div className='flex justify-around ' id="colorBox">
            <div className="w-2/5 h-20 bg-blue-500"></div>
            <div className="w-2/5 h-20 bg-green-500"></div>
        </div>
        <div className="flex justify-center items-center flex-grow" >
        <div className='flex items-center w-2/4 h-3/4 bg-orange-400 justify-around' id="mainBoxes">
            <div className='flex-col space-y-8 ' id="3boxes">
                <div className="h-20 w-20 bg-slate-600"></div>
                <div className="h-20 w-20 bg-slate-600"></div>
                <div className="h-20 w-20 bg-slate-600"></div>
            </div>
            <div className='space-y-32' id="2boxes">
                <div className="h-20 w-20 bg-green-600"></div>
                <div className="h-20 w-20 bg-green-600"></div>
            </div>
            <div className='space-y-32' id="2boxes">
                <div className="h-20 w-20 bg-red-600"></div>
                <div className="h-20 w-20 bg-red-600"></div>
            </div>
        </div>
        </div>
        <div className='flex justify-between ' id="footer">
            <div className="h-20 w-1/4 bg-blue-600 "></div>
            <div className="h-20 w-1/4 bg-yellow-600"></div>
        </div>
    </div>
  )
}

export default Positions
