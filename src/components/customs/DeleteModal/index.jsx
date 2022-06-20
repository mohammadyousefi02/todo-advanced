import React,{useRef} from 'react'

import {useDispatch} from 'react-redux'
import {hideDeleteModal} from "../../../redux/slices/showDeleteModalSlice"
import {deleteTodo, filterTodosBySearch} from "../../../redux/slices/todosSlice"

function DeleteModal() {
    const animDiv = useRef()
    const dispatch = useDispatch()
    function deleteHandler(){
        dispatch(deleteTodo())
        dispatch(filterTodosBySearch())
        animDiv.current.classList.add("fadeOut-anim")
        animDiv.current.addEventListener("animationend",()=>{
            dispatch(hideDeleteModal())
        })
    }
  return (
    <div className="h-full w-full bg-black bg-opacity-50 flex justify-center items-center absolute top-0">
        <div ref={animDiv} className='w-[800px] bg-white rounded py-5 flex flex-col gap-3 border border-[rgba(0,0,0,.2)] fadeIn-anim'>
            <h1 className='px-5 text-2xl'>Are you sure you want to delete this task?</h1>
            <div className='border'></div>
            <div>
                <div className="flex justify-between px-5 py-3">
                        <button className="text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white transition duration-300 border border-[#0d6efd] py-1.5 px-3 rounded" onClick={()=>dispatch(hideDeleteModal())}>cancel</button>
                        <button className="text-white bg-[#0d6efd] py-1.5 px-3 rounded" onClick={deleteHandler}>save</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteModal