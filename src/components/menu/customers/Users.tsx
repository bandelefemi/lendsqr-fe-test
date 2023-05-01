import React, { useEffect, useState } from 'react'
import { earningData } from '../../data'
import Table from '../../Table'
import moment from 'moment'
import Loader from '../../Loader'

const Users = () => {


  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(true);


  const columns = [
    { lendsqr: 'orgName', label: 'ORAGNIZATION' },
    { lendsqr: 'userName', label: 'USERNAME' },
    { lendsqr: 'email', label: 'EMAIL'},
    { lendsqr: 'mobileNumber', label: 'PHONE NUMBER' },
    { lendsqr: 'date_joined', label: 'DATE JOINED' },
    // { lendsqr: 'status', label: 'STATUS' },

  ]

  useEffect(()=> {
    setLoading(true);
    fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users').then(res => {
      return res.json()
    })
    .then((data) => createObjArray(data))
    .then((objectArray)=> {
      setUserData(objectArray)
      setLoading(false);

    })

  }, [])

  function createObjArray(array){
    return (
      array?.map((item)=> {
        return {
          'date_joined' : moment(item.createdAt).format("MM YYYY"),
          'mobileNumber' : item.phoneNumber.replace(
            /[^0-9 | / | - | \s]/g,
            ""
          ),
          ...item
        }
      })
    )
  }

  if (loading) {
    return <div className="flex w-full items-center justify-center h-screen">
      <Loader />
    </div> ;
  }

  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        
        <div className='flex m-3 flex-wrap justify-center gap-6 items-center'>
          {earningData.map((item)=> (
            <div key={item.title}
                 className='bg-white dark:text-gray-200 
                 dark:bg-secondary-dark-bg md:w-56 px-7 py-4 pt-9 rounded-md shadow-lg' >
              <button type='button' 
                      style={{color: item.iconColor, backgroundColor: item.iconBg
                              }}
                      className='text-2xl opacity-80 rounded-full hover:drop-shadow-xl p-4'      >
                {item.icon}
              </button>
              
              <p className='text-sm mt-3 text-[#213f7d]'>
                {item.title}
              </p>

              <p className='mt-3'>
                <span className='text-xl font-semibold text-[#213f7d]'>
                  {item.amount}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      
        
        <Table rows= {userData}
               columns= {columns} />
        
        
      
    </div>
  )
}

export default Users