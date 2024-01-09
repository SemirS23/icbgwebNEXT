import React from 'react'

function Navbar() {
  return (
    <main>  

        <nav className="bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="/" className='text-white'>
                                Logo
                            </a>
                        </div>
                    </div>
                    <div className='hidden md:black'>
                        <a href="/" className='text-white hover:bg-white hover:text-black rounded-lg'>Home</a>
                    </div>
                </div>
            </div>
        </nav>
    </main>
  )
}

export default Navbar