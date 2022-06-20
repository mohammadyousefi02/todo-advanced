import React,{useRef} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Select from '../Select'
import {IoMdClose} from '../../../icons'



import {hideViewTaskModal} from '../../../redux/slices/showViewTaskModalSlice'
import {resetTodo} from '../../../redux/slices/todoSlice'

function ViewTaskModal() {
    const dispatch = useDispatch()
    const animDiv = useRef()
    const closeModalHandler = () => {
        dispatch(resetTodo())
        animDiv.current.classList.add("fadeOut-anim")
        animDiv.current.addEventListener("animationend",()=>{
            dispatch(hideViewTaskModal())
        })
    }

    const todo = useSelector(store => store.todo)
  return (
    <div className="h-full w-full bg-black bg-opacity-10 flex justify-center items-center absolute top-0 px-2">
    <div ref={animDiv} className="w-[800px] bg-white rounded py-2 fadeIn-anim">
       <div className="px-2 flex justify-between items-center">
        <h1 className="text-xl pb-2">View Task</h1>
        <IoMdClose className='text-[32px] text-[#AAA] hover:text-black cursor-pointer transition duration-300' onClick={closeModalHandler}/>
       </div>
       <div className="border"></div>
       <div className="px-2 py-4 flex flex-col my-2">
           <input type="text" className="w-full rounded border-2 p-1 mb-12" placeholder="Task Name" value={todo.task} disabled/>
           <label className="text-end">deadline</label>
           <div className="flex gap-4 items-center mb-12">
              <Select value={todo.priority} disabled></Select>
              <Select value={todo.status} disabled></Select>
               <div className="flex flex-col">
                   <input type="text" className="border-2 rounded px-1" value={todo.deadline.toString()} disabled />
               </div>
           </div>
           <textarea placeholder="Details (Optional)" rows="3" className="border-2 rounded p-1" value={todo.detail} disabled></textarea>
       </div>
    </div>
</div>
  )
}

export default ViewTaskModal