import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    // const [formData, setFormData] = useState()

    const [showPassword, setshowPassword] = useState<Boolean>(false);

    const handleChange=()=> {
        
    }
  return (
    <main className=''>
        <div className='flex'>
            <section className='hidden lg:flex bg-gray-50 w-1/2 h-screen p-20'>
                <div className=' flex flex-col h-full'>
                    <div>
                        <img src='Group.svg' alt='' />
                    </div>
                    <div className=' m-auto'>
                        <img src='pablo.svg' alt='' />
                    </div>
                </div>
            </section>
            <section className='w-full relative lg:static bg-white px-4 sm:px-16 lg:px-24 xl:px-36 py-24 lg:w-1/2 flex flex-col items-center'>
                <div className=' lg:hidden absolute opacity-5 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-0  '>
                    <img src='pablo.svg' alt='' />
                </div>
                <div className=' lg:hidden'>
                    <img src='Group.svg' alt='' />
                </div>
                <div className=' h-full w-2/3 md:w-3/5 lg:w-full flex flex-col mt-8 z-10 '>
                    <div className=' pt-10'>
                        <p className='text-3xl font-bold text-[#213f7d]'>Welcome!</p>
                        <p className='mt-2 font-light text-[#213f7d]'>Enter details to login</p>
                    </div>
                    <form className=' flex flex-col gap-6 mt-8'>
                        <div className=' border p-2 rounded-md'>
                            <input 
                                placeholder='Email' 
                                type='email'
                                
                                onChange={handleChange}
                                name=''
                                className='pl-2 focus:outline-none placeholder:text-sm'
                                 />
                        </div>
                        <div className=' border relative rounded-md p-2'>
                            <input 
                                placeholder='Password' 
                                type={showPassword? 'text': 'password'}
                                className='pl-2 focus:outline-none placeholder:text-sm' />
                            <span onClick={()=> setshowPassword(!showPassword)}
                                className=' absolute cursor-pointer top-3 font-bold right-4 text-[#39cdcc] text-xs' >
                                    {showPassword? 'HIDE': 'SHOW'}
                            </span>
                        </div>
                        <p className='text-[#39cdcc] text-xs'>FORGOT PASSWORD?</p>

                        <Link to={'/dashboard'} className='bg-[#39cdcc] text-sm text-white p-2 rounded-md ' >
                            <button 
                                type='submit'
                                className=' flex justify-center w-full'  >LOG IN
                            </button>
                        </Link>
                        
                    </form>
                </div>
            </section>
        </div>
    </main>
  )
}

export default Login