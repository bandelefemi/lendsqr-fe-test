import React, { useMemo, useState } from 'react'
import Pagination from './Pagination'
import { sortRows, filterRows, paginateRows } from './helpers'
import { Link } from 'react-router-dom'
import UserOptions from './UserOptions'

const Table = ({columns, rows}: any) => {


  const [activePage, setActivePage] = useState (1)
  const [colId, setColId] = useState<string | null | undefined>();
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

  
  const toggleDropDown = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
    { id }: any
  ) => {
    event.stopPropagation();
    colId === id ? setColId("") : setColId(`${id}`);
  };

  const ColVertical = ({ id }: any) => {
    return (
      <div className="ml-5">
        <svg
          onClick={(e) => toggleDropDown(e, { id })}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_5530_2616)">
            <path
              d="M9.99992 6.1111C10.9221 6.1111 11.6666 5.36666 11.6666 4.44444C11.6666 3.52222 10.9221 2.77777 9.99992 2.77777C9.0777 2.77777 8.33325 3.52222 8.33325 4.44444C8.33325 5.36666 9.0777 6.1111 9.99992 6.1111ZM9.99992 8.33333C9.0777 8.33333 8.33325 9.07777 8.33325 9.99999C8.33325 10.9222 9.0777 11.6667 9.99992 11.6667C10.9221 11.6667 11.6666 10.9222 11.6666 9.99999C11.6666 9.07777 10.9221 8.33333 9.99992 8.33333ZM9.99992 13.8889C9.0777 13.8889 8.33325 14.6333 8.33325 15.5555C8.33325 16.4778 9.0777 17.2222 9.99992 17.2222C10.9221 17.2222 11.6666 16.4778 11.6666 15.5555C11.6666 14.6333 10.9221 13.8889 9.99992 13.8889Z"
              fill="#545F7D"
            />
          </g>
          <defs>
            <clipPath id="clip0_5530_2616">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  };

  
  // console.log(calculatedRows)

  return (
    <div className='relative p-12'>
    <div className='overflow-x-auto w-full px-6 bg-white flex justify-center shadow-lg rounded-md '>
        <table className=' table-auto text-left my-6 text-sm font-light text-[#545f7d] indent-0'>
            <thead className='border-b text-xs font-medium'>
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
                    <th>
                        STATUS
                    </th>
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
                          <td>
                            <div className=' bg-[#39cd62]/10 px-3 py-2 rounded-2xl text-sm text-[#39cd62] '>
                                <p>Active</p>
                            </div>
                          </td>

                          <td className=' relative'>
                            <ColVertical id = {row.id} />
                            {colId === `${row.id}` ? (
                                <UserOptions 
                                    id = {row.id}
                                    setColId = {setColId} />
                            ): (
                                ''
                            )}
                          </td>

                        </tr>
                        
                        
                    )
                })}
            </tbody>
        </table>
        
    </div>
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