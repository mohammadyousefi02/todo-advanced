import React from 'react'

import {TbListNumbers, FaFilter, BsPlusSquareFill} from "../../../icons"

import { useDispatch,useSelector } from "react-redux"
import { showTaskModal} from "../../../redux/slices/showTaskModalSlice"
import { changeFilter,filterTodosBySearch } from "../../../redux/slices/todosSlice"
import {showFilterMenu} from "../../../redux/slices/showFilterMenuSlice"


function Header() {
  const dispatch = useDispatch()
  const {filterValue} = useSelector(store => store.todos)
  const filterTodosHandler = (e) => {
    dispatch(changeFilter(e.target.value))
    dispatch(filterTodosBySearch())
  }
  return (
    <header className='h-16 bg-[#6200EA] flex justify-between p-1 text-white'>
        <div className="flex gap-1 items-center">
            <TbListNumbers className="text-2xl"/>
            <h1 className="font-bold text-[14px]">My To-Do Tasks</h1>
        </div>
        <div className="flex gap-4 items-center px-1">
            <input placeholder="Search" className="p-1 sm:py-2 sm:px-6 text-gray-600 rounded text-[14px] placeholder:text-gray-500 border focus:border-[#86b7fe] outline-0" 
            value={filterValue}
            onChange={filterTodosHandler}/>
            <FaFilter className="text-[18px] sm:text-[24px]" onClick={()=>dispatch(showFilterMenu())}/>
            <BsPlusSquareFill className="text-[18px] sm:text-[24px]" onClick={()=>dispatch(showTaskModal())}/>
        </div>
    </header>
  )
}

export default Header