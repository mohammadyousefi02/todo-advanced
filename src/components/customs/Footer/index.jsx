import React from 'react'
import Select from '../Select'
import {FiChevronRight,FiChevronLeft} from '../../../icons'

import {useDispatch,useSelector} from 'react-redux'

import { changeRow,nextPage,prevPage } from '../../../redux/slices/paginationSlice'

const rowsOptions = [
    {value:5,title:"5",id:1},
    {value:10,title:"10",id:2},
    {value:15,title:"15",id:3},
    {value:"all",title:"All",id:4},
]

function Footer() {
    const dispatch = useDispatch()
    const {page,row} = useSelector(store=>store.pagination)
    const {todos} = useSelector(store=>store.todos)
  return (
    <>
        {todos.length?(
            <div className='flex gap-8 items-center my-2 justify-end px-2'>
            <div className='flex items-center gap-1'>
                <span>Rows per page:</span>
                <Select value={row} onChange={(e)=>dispatch(changeRow(e.target.value))} options={rowsOptions}/>
            </div>
            <div>
                {row === "all" ? `1-${todos.length} of ${todos.length}` : `${(page - 1) * row + 1}-${page*row > todos.length ? todos.length : page*row} of ${todos.length}`}
            </div>
            <div className='flex gap-5 font-bold'>
                <FiChevronLeft onClick={()=>dispatch(prevPage())} className="text-black hover:text-black cursor-pointer transition duration-300"/>
                <FiChevronRight onClick={()=>dispatch(nextPage())} className="text-black hover:text-black cursor-pointer transition duration-300"/>
            </div>
        </div>
        ):null} 
    </>
    
  )
}

export default Footer