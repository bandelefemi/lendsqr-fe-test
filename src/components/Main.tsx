import React from 'react'
import { earningData } from './data'

const Main = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        
        
        <div className='flex m-3 flex-wrap justify-center gap-6 items-center'>
          {earningData.map((item)=> (
            <div key={item.title}
                 className='bg-white dark:text-gray-200 
                 dark:bg-secondary-dark-bg md:w-56 px-7 py-4 pt-9 rounded-md shadow-lg' >
              <button type='button' 
                      style={{color: item.iconColor, 
                              backgroundColor: item.iconBg}}
                      className='text-2xl opacity-80 rounded-full hover:drop-shadow-xl p-4'        >
                {item.icon}
              </button>
              
              <p className='text-sm mt-3 text-gray-700'>
                {item.title}
              </p>

              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Main