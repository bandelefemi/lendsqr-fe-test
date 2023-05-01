import React from 'react'

const Pagination = ({ activePage, count, rowsPerPage, totalPages, setActivePage }) => {

    const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1
    const end = activePage === totalPages ? count : beginning + rowsPerPage - 1


  return (
    <div className='flex justify-between p-3 mt-2 items-center text-[#213f7d]'>
    
    <div className=' flex'>
    
    <p className='flex items-center gap-3'>
        Showing 
        <span className='flex items-center bg-[#545f7d]/20 px-4 py-1 rounded-md'>{activePage}
        <span className=' ml-3'>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                    <path d="M11.0571 3.99378C11.8982 3.15269 13.1594 4.45644 12.3182 5.25487L7.56747 10.0056C7.23115 10.3841 6.6427 10.3841 6.30638 10.0056L1.63989 5.38129C0.840915 4.5402 2.10255 3.27906 2.9431 4.1202L6.93688 8.11398L11.0571 3.99378Z" fill="#213F7D"/>
                </g>
            </svg>

        </span>
        </span> 
        <span className=' text-sm font-light'>
            out of {count}
        </span>
    </p>
    </div>

    <div className=" flex gap-4">
      <button disabled={activePage === 1} 
              onClick={() => setActivePage(activePage - 1)}
              className=' bg-[#545f7d]/20 rounded-md p-1'>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6">
                <path d="M10.0061 11.0573C10.8472 11.8984 9.54344 13.1595 8.745 12.3184L3.99424 7.56759C3.61581 7.23127 3.61581 6.64282 3.99424 6.3065L8.61858 1.64002C9.45967 0.841037 10.7208 2.10267 9.87967 2.94322L5.8859 6.937L10.0061 11.0573Z" fill="#213F7D"/>
            </g>
        </svg>
      </button>
      <div>
        <p className=' text-[#213f7d]/50 font-light tracking-widest'>
            1 2 3 ... 15 16
        </p>
      </div>

      
      <button disabled={activePage === totalPages} 
              onClick={() => setActivePage(activePage + 1)}
              className='bg-[#545f7d]/20 rounded-md p-1'>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.99391 2.94274C3.15281 2.10165 4.45656 0.840502 5.255 1.68165L10.0058 6.43241C10.3842 6.76873 10.3842 7.35718 10.0058 7.6935L5.38142 12.36C4.54033 13.159 3.27918 11.8973 4.12033 11.0568L8.1141 7.063L3.99391 2.94274Z" fill="#213F7D"/>
        </svg>
      </button>
    </div>
    </div>
  )
}

export default Pagination