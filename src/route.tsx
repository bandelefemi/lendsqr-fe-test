import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import { DecisionModels, Guarantors, LoanRequest, Loans, Savings, Users } from './components'

const route = () => {
  return (
    <div>



<Routes>
                    {/* dashboard */}
                    <Route path='/' element={<Login/>} />
                    <Route path='/dashboard' element={<Dashboard/>} />


                    {/* users */}
                    <Route path='/users' element={<Users/>} />
                    <Route path='/guarantors' element={<Guarantors/>} />
                    <Route path='/loans' element={<Loans/>} />
                    <Route path='/decisionmodels' element={<DecisionModels/>} />
                    <Route path='/savings' element={<Savings/>} />
                    <Route path='/loanrequests ' element={<LoanRequest/>} />


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
  )
}

export default route