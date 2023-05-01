import React, { useMemo, useState } from 'react'
import Pagination from './Pagination'
import { sortRows, filterRows, paginateRows } from './helpers'
import { Link } from 'react-router-dom'

const Table = ({columns, rows}: any) => {


  const [activePage, setActivePage] = useState (1)
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState({order: 'asc', orderBy: 'id'})
  const rowsPerPage = 9

  const filteredRows = useMemo(() => filterRows(rows, filters), [rows, filters])
  const sortedRows = useMemo(() => sortRows(filteredRows, sort), [filteredRows, sort])
  const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage)

  const count = filteredRows.length
  const totalPages = Math.ceil(count / rowsPerPage)


  const handleSort = (lendsqr) => {
    setActivePage(1)
    setSort(prevSort => ({
        order: prevSort.order === 'asc' && prevSort.orderBy === lendsqr ? 'desc' : 'asc',
        orderBy: lendsqr
    }))
  }
  
  // console.log(calculatedRows)

  return (
    <div className='p-6 '>
        <table className=' text-left text-sm text-[#213f7d] font-light bg-white rounded-md'>
            <thead className='border-b text-xs font-medium dark:border-neutral-500'>
                <tr>
                    {columns.map(column => {
                        return <th scope='row' className=' items-center px-3 py-4' key={column.lendsqr}>
                                  <div className=' flex items-center gap-3'>
                                    <span>{column.label}</span>
                                    <button onClick={()=> handleSort(column.lendsqr)}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z" fill="#545F7D"/>
                                         </svg>

                                    </button>
                                  </div>
                                    
                                </th>
                    })}
                </tr>
            </thead>
            <tbody className=''>
                {calculatedRows.map( row => {
                    return (
                        <tr className='border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600' key={row.id}>
                                            

                            {columns.map(column => {
                                if (column.format) {
                                    return (
                                      
                                        <td className=' px-3 py-4' key={column.lendsqr}><Link to={`/dashboard/userprofile/${row.id}`}>{column.format(row[column.lendsqr])}</Link></td>
                                      
                                    ) 
                                }
                                return (
                                  
                                    <td className=' px-3 py-4' key={column.lendsqr}><Link to={`/dashboard/userprofile/${row.id}`}>{row[column.lendsqr]}</Link></td>
                                  
                                ) 
                            })}
                          

                        </tr>
                        
                        
                    )
                })}
            </tbody>
        </table>
        <Pagination 
            activePage = {activePage}
            count={count}
            rowsPerPage = {rowsPerPage}
            totalPages = {totalPages}
            setActivePage = {setActivePage} />
    </div>
  )
}

export default Table