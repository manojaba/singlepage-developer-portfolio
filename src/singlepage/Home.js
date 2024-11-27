import React from 'react'
import Topbar from './Topbar'

function Home() {

    // bg - [#151515]
    return (
        <div className='border border-black bg-blue-100 '>


            <div className='flex justify-center'>
                <div className=' border-green-300 bg-[#242424] flex flex-col items-center w-min'>
                    <Topbar />
                    <img className='max-w-[174px] grayscale    ' src='/assets/images/manoj-zoom.png' alt='profile pic'></img>
                </div>
            </div>




        </div>
    )
}

export default Home