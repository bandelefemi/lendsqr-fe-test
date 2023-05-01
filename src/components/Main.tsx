import React from 'react'
// import Button from './Button'
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
      {/*<div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 
        dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 
              text-gray-600 hover:drop-shadow-xl'>
                 <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expenses</span>
              </p>
              <p className='flex items-center gap-2 
              text-green-500 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>
                    $642,945
                  </span>
                  <span className='p-1.5 hover:drop-shadow-xl 
                  cursor-pointer rounded-full text-white 
                  bg-green-400 ml-3 text-xs'>
                    23%
                  </span>
                </p>
                <p className='text-gray-400 mt-1'>Budget</p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>
                    $642,945
                  </span>
                  
                </p>
                <p className='text-gray-400 mt-1'>Expenses</p>
              </div>
                        
              <div className='mt-5'>
                <SparkLine 
                  currentColor={currentColor}
                  id='sparkine'
                  type='Line'
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                  color={currentColor} />
              </div>
              <div className='mt-10'>
                <Button 
                  color='white'
                  bgColor={'#010101'}
                  text={'Download Report'}
                  borderRadius='10px' />
              </div>
            </div>
            <div>
              <Stacked 
                width='320px'
                height='360px' />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Main