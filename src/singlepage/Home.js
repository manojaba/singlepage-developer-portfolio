import React from 'react'
import Topbar from './Topbar'

function Home() {

    // bg - [#151515]
    return (
        <div className='border border-black bg-blue-100 '>


            <div className=' border-green-300 flex flex-col items-center gap-'>
                <Topbar />
                <img className='max-w-[174px] grayscale bg-[#242424]   ' src='/assets/images/manoj-zoom.png' alt='profile pic'></img>
            </div>




        </div>
    )
}

export default Home