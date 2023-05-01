import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { MdOutlineCancel } from 'react-icons/md'
// import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { navLinks } from './data'
import { useStateContext } from '../contexts/ContextProvider'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { MdOutlineCancel } from 'react-icons/md'


 
const Sidebar = () => {

  const { activeMenu, setActiveMenu, screenSize } = useStateContext()

  const handleCloseSideBar =()=> {
    if (activeMenu && screenSize < 900) {
      setActiveMenu(false)
    } else {setActiveMenu(true)}
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5  text-[#213f7d] bg-[#39cdcc]/10 text-md m-2 border-l-2 border-[#39cdcc]'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5  text-[#213f7d]/60 dark:hover:text-black hover:bg-light-gray dark:text-gray-200 text-md m-2'

  return (
    <div className='ml-3 z-100 shadow-lg h-screen md:overflow-hidden overflow-auto 
    md:hover:overflow-auto pb-10 '>
      {activeMenu && (<>
      <div className='flex justify-between items-center'>
        <Link to='/dashboard' onClick={()=> {}} className='items-center 
        ml-4 mt-5'>
          <img src='Group.svg' alt='' />
        </Link>
        <TooltipComponent content='Menu' position='BottomCenter'>
          <button type='button' onClick={()=> setActiveMenu((prevState: any) => !prevState)} className='text-xl 
          rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div> 
      <div className='mt-10'>
      <NavLink to={`/dashboard`}
                       className={({ isActive })=> normalLink}
                      //  style={({isActive}) => ({backgroundColor: isActive? '#ebfaf9': ''})}
                       onClick={()=>handleCloseSideBar()}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M10 9H16V13.5C16 14.3 15.3 15 14.5 15H1.5C0.7 15 0 14.3 0 13.5V9H6V10.5C6 10.6326 6.05268 10.7598 6.14645 10.8536C6.24021 10.9473 6.36739 11 6.5 11H9.5C9.63261 11 9.75979 10.9473 9.85355 10.8536C9.94732 10.7598 10 10.6326 10 10.5V9Z" fill="#213F7D"/>
                  <path d="M14.5 4H12V2.5C12 1.7 11.3 1 10.5 1H5.5C4.7 1 4 1.7 4 2.5V4H1.5C0.7 4 0 4.7 0 5.5V8H16V5.5C16 4.7 15.3 4 14.5 4ZM10 4H6V3H10V4Z" fill="#213F7D"/>
                </svg>
                <span className='capitalize'>
                  Switch Organization
                </span>
                <span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0573 3.9938C11.8984 3.15271 13.1595 4.45646 12.3184 5.25489L7.56759 10.0056C7.23127 10.3841 6.64282 10.3841 6.3065 10.0056L1.64002 5.38131C0.841037 4.54022 2.10267 3.27907 2.94322 4.12022L6.937 8.114L11.0573 3.9938Z" fill="#213F7D"/>
                  </svg>
                </span>
              </NavLink>
      <NavLink to={`/dashboard`}
                       className={({ isActive })=> normalLink}
                       style={{marginTop: '20px'}}
                       onClick={()=>handleCloseSideBar()}>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_59971_345)">
                    <path opacity="0.4" d="M9.33341 12.8775V10.2222C9.33341 10.1043 9.28659 9.99127 9.20324 9.90792C9.11989 9.82457 9.00684 9.77774 8.88897 9.77774H7.11119C6.99332 9.77774 6.88027 9.82457 6.79692 9.90792C6.71357 9.99127 6.66675 10.1043 6.66675 10.2222V12.8808C6.66675 12.9983 6.62023 13.111 6.53736 13.1943C6.45449 13.2776 6.34201 13.3247 6.22453 13.3252L3.11119 13.3333C2.99332 13.3333 2.88027 13.2865 2.79692 13.2031C2.71357 13.1198 2.66675 13.0067 2.66675 12.8889V8.33497L7.78869 4.11691C7.84889 4.06839 7.92388 4.04193 8.00119 4.04193C8.07851 4.04193 8.1535 4.06839 8.21369 4.11691L13.3334 8.3333V12.8889C13.3334 13.0067 13.2866 13.1198 13.2032 13.2031C13.1199 13.2865 13.0068 13.3333 12.889 13.3333L9.77786 13.3247C9.71926 13.3247 9.66124 13.3131 9.60713 13.2906C9.55303 13.2681 9.50391 13.2351 9.4626 13.1935C9.4213 13.152 9.38862 13.1026 9.36645 13.0484C9.34427 12.9942 9.33305 12.9361 9.33341 12.8775Z" fill="#213F7D"/>
                    <path d="M15.9255 7.45416L15.2172 8.31528C15.1894 8.34913 15.1552 8.37717 15.1166 8.3978C15.0779 8.41843 15.0356 8.43124 14.992 8.4355C14.9484 8.43975 14.9044 8.43537 14.8625 8.42261C14.8206 8.40985 14.7816 8.38895 14.7478 8.36111L8.21362 2.97805C8.15342 2.92953 8.07843 2.90307 8.00112 2.90307C7.9238 2.90307 7.84882 2.92953 7.78862 2.97805L1.25475 8.36111C1.18646 8.41724 1.09866 8.44395 1.01068 8.43536C0.922692 8.42676 0.841724 8.38357 0.785587 8.31528L0.0772555 7.45416C0.020991 7.38601 -0.00590471 7.2983 0.0024817 7.21032C0.0108681 7.12234 0.0538501 7.04129 0.121978 6.985L7.15251 1.19444C7.39117 0.998046 7.69065 0.890667 7.99973 0.890667C8.30881 0.890667 8.60829 0.998046 8.84695 1.19444L11.3333 3.23916V1.22222C11.3333 1.13381 11.3684 1.04903 11.431 0.986517C11.4935 0.924004 11.5783 0.888885 11.6667 0.888885H13.2222C13.3106 0.888885 13.3954 0.924004 13.4579 0.986517C13.5204 1.04903 13.5555 1.13381 13.5555 1.22222V5.06972L15.8778 6.98389C15.9119 7.01156 15.9402 7.0457 15.9611 7.08434C15.9819 7.12299 15.995 7.16539 15.9994 7.20909C16.0039 7.25279 15.9996 7.29694 15.9869 7.339C15.9743 7.38106 15.9534 7.4202 15.9255 7.45416Z" fill="#213F7D"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_59971_345">
                      <rect width="16" height="14.2222" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <span className='capitalize'>
                  Dashboard
                </span>
              </NavLink>
          
        {navLinks.map((item) => (
          <div key={item.title}> 
            <div className='text-gray-400 m-3 mt-4 uppercase text-xs'>
             {item.title}
            </div>
            
            {item.links.map((Link)=> (
              <NavLink to={`/dashboard/${Link.name}`} 
                       key={Link.name}
                       className={({ isActive })=> isActive? 
                       activeLink: normalLink}
                      //  style={({isActive}) => ({backgroundColor: isActive? '#ebfaf9': ''})}
                       onClick={()=>handleCloseSideBar()}>
                {Link.icon}
                <span className='capitalize'>
                  {Link.name}
                </span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
      </> )}
    </div>
  )
}

export default Sidebar