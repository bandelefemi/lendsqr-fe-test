import React from 'react'
import Sidebar from '../components/Sidebar';
import {  Routes, Route } from 'react-router-dom';

// import { FiSettings } from 'react-icons/fi'

import { Users, Guarantors, Loans, DecisionModels, Savings, LoanRequest,
  UserProfile} from '../components'
import Navbar from '../components/Navbar';
import { useStateContext } from '../contexts/ContextProvider';
// import Login from './login';
// import Main from '../components/Main';

const Dashboard = () => {

  const {activeMenu} = useStateContext()

  return (
    
    
        <div className='flex relative dark:bg-main-dark-bg'>
            
            {activeMenu? 
            (<div className='w-72 z-50 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar/>
            </div> )
            : (<div className='w-0 dark:bg-secondary-bg z-50'>
                <Sidebar />
              </div>  ) }

              <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full
                            ${activeMenu? 'md:ml-72': 'flex-2'}  `}>
                <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                  <Navbar />
                </div>
                <div className=''>
                  {/* {themeSettings && <ThemeSettings /> } */}

                  <Routes>
                    {/* dashboard */}
                    <Route path='/' element={<Users />} />
                    {/* <Route path='/main' element={<Main/>} /> */}


                    {/* users */}
                    <Route path='/users' element={<Users/>} />
                    <Route path='/guarantors' element={<Guarantors/>} />
                    <Route path='/loans' element={<Loans/>} />
                    <Route path='/decisionmodels' element={<DecisionModels/>} />
                    <Route path='/dashboard/savings' element={<Savings/>} />
                    <Route path='/loanrequests ' element={<LoanRequest/>} />
                    <Route path='/userprofile/:id' element={<UserProfile />} />


                    {/* apps */}
                    {/* <Route path='/kanban' element={<Kanban/>} />
                    <Route path='/editor' element={<Editor/>} />
                    <Route path='/calendar' element={<Calendar/>} />
                    <Route path='/color-picker' element={<ColorPicker/>} /> */}

                    {/* charts */}
                    {/* <Route path='/line' element={<Line/>} />
                    <Route path='/bar' element={<Bar/>} />
                    <Route path='/area' element={<Area/>} />
                    <Route path='/pie' element={<Pie/>} />
                    <Route path='/financial' element={<Financial/>} />
                    <Route path='/color-mapping' element={<ColorMapping/>}/>
                    <Route path='/pyramid' element={<Pyramid/>} />
                    <Route path='/stacked' element={<Stacked/>} /> */}
                  </Routes>
                </div>
              </div>
        </div>
    
  
    
  )
}

export default Dashboard