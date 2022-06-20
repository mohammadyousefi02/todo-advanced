import React,{useRef} from 'react'
import { IoMdClose } from 'react-icons/io'
import Select from '../Select'

import {useDispatch,useSelector} from "react-redux"
import { hideFilterMenu } from '../../../redux/slices/showFilterMenuSlice'
import { changePriorityFilter,changeStatusFilter,filterTodosBySearch,changeDeadLineFilter } from '../../../redux/slices/todosSlice'

const priorityOptions = [
    {value: 'all', title: 'All',id:1},
    {value: 'low', title: 'Low',id:2},
    {value: 'medium', title: 'Medium',id:3},
    {value: 'high', title: 'High',id:4}
]

const statusOptions = [
    {value: 'all', title: 'All',id:1},
    {value: 'todo', title: 'Todo',id:2},
    {value: 'doing', title: 'Doing',id:3},
    {value: 'done', title: 'Done',id:4}
]

const deadLineOptions = [
    {value: 'all', title: 'All',id:1},
    {value: 'overdue', title: 'Overdue',id:2},
    {value: 'for today', title: 'For Today',id:3},
    {value: 'for future', title: 'For The Future',id:4}
]

function FilterMenu() {
    const animDiv = useRef()
    const {priorityFilterValue,statusFilterValue,deadLineFilter} = useSelector(store => store.todos)
    const dispatch = useDispatch()

    const changeFilter = (cb) => {
        cb()
        dispatch(filterTodosBySearch())
    }

    const closeModdalHandler = () => {
        animDiv.current.classList.add("fateOut-anim-ltr")
        animDiv.current.addEventListener("animationend",()=>{
            dispatch(hideFilterMenu())
        })
    }

  return (
    <div className='h-full w-full bg-black bg-opacity-10 flex justify-end absolute top-0'>
        <div ref={animDiv} className='w-[400px] h-full bg-white p-2 fateIn-anim-rtl'>
            <header className='flex justify-between items-center'>
                <h1 className='text-[24px]'>Filters</h1>
                <IoMdClose className='text-[32px] text-[#AAA] hover:text-black cursor-pointer transition duration-300' onClick={closeModdalHandler  }/>
            </header>
            <div className='flex flex-col gap-4 my-10'>
                <div className='flex flex-col gap-2'>
                    <span>Priority:</span>
                    <Select value={priorityFilterValue} onChange={(e)=>changeFilter(()=>dispatch(changePriorityFilter(e.target.value)))} className="p-1.5" options={priorityOptions} />
                </div>
                <div className='flex flex-col gap-2'>
                    <span>Status:</span>
                    <Select value={statusFilterValue} onChange={(e)=>changeFilter(()=>dispatch(changeStatusFilter(e.target.value)))} className="p-1.5" options={statusOptions} />
                </div>
                <div className='flex flex-col gap-2'>
                    <span>Deadline:</span>
                    <Select className="p-1.5" options={deadLineOptions} value={deadLineFilter} onChange={(e)=>changeFilter(()=>dispatch(changeDeadLineFilter(e.target.value)))}  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FilterMenu