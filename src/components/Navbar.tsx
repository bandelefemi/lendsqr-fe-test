import React, {useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { RiArrowDownSFill, RiNotification3Line } from 'react-icons/ri'
import { BiSearch } from 'react-icons/bi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Docs, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({title, customFunc, icon, color, dotColor } : any) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' 
    onClick={customFunc} 
    style={{color}} 
    className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{background: dotColor}} 
      className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
        {icon}
      
    </button>
  </TooltipComponent>
)


const Navbar = () => {

  const {activeMenu, setActiveMenu, 
    clicked, handleClick, 
    screenSize, setScreenSize} = useStateContext()


    useEffect(()=> {
      const handleResize = () => setScreenSize(window.innerWidth)
  
      window.addEventListener('resize', handleResize)
  
      handleResize()
  
      return ()=> window.removeEventListener('resize', handleResize)
    }, []) 
  
    useEffect(()=> {
      if (screenSize < 900) {
        setActiveMenu(false)
      } else {setActiveMenu(true)}
    }, [screenSize])
    


  return (
    <div className='flex justify-between p-2 relative bg-white shadow-sm'>
      <NavButton title='Menu' 
      customFunc={()=> setActiveMenu(!activeMenu)} 
      color={'#213f7d'} icon={<AiOutlineMenu/>}/>

      <div className='hidden lg:flex rounded-lg'>
        <input placeholder='search for anything' type='text' className=' font-light pl-4 pr-8 border border-r-0 rounded-l-lg focus:outline-none' />
        <div className='px-5 text-xl rounded-r-lg flex items-center justify-center bg-[#39cdcc] text-white'>
          <BiSearch />
        </div>
      </div>

      <div className='flex'>
        <p className='relative text-sm text-[#213f7d] font-light underline p-3 hover:bg-light-gray'>
          Docs
        </p>

        <NavButton title='Notification' 
          customFunc={()=> handleClick('notification')} dotColor='#213f7d'
          color={'#213f7d'} icon={<RiNotification3Line/>}
        />
        <TooltipComponent content={'profile'} position='BottomCenter'>
          <div onClick={()=> handleClick('userProfile')} className='flex items-center 
          gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'>
            <img src={'avatar.png'} alt=''
            className='w-8 h-8 rounded-full'
            />
            <p className=' flex items-center'>
              <span className='text-gray-400 text-14'>
                Hi,
              </span>{' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>
                Dave
              </span>
              <span className=' ml-1'>
                <RiArrowDownSFill />
              </span>
            </p>
          </div>
        </TooltipComponent>

        {clicked.docs && <Docs />}
        {clicked.userProfile && <UserProfile />}
        {clicked.notification && <Notification />}

      </div>
      
    </div>
  )
}

export default Navbar