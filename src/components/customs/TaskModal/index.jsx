import React,{useRef} from "react";
import Select from "../Select";

import {v4 as uuidv4} from "uuid";

import { addTodo,updateTodos, filterTodosBySearch } from "../../../redux/slices/todosSlice";
import { hideTaskModal } from "../../../redux/slices/showTaskModalSlice";

import { changeTodo,resetTodo } from "../../../redux/slices/todoSlice";

import {useDispatch,useSelector} from "react-redux"

import Calendar from "../Calendar"

import { DateObject } from "react-multi-date-picker";




const priorityOptions = [
    {value:"low",title:"Low",id:2},
    {value:"medium",title:"Medium",id:3},
    {value:"high",title:"High",id:4}
]

const statusOptions = [
    {value:"todo",title:"Todo",id:2},
    {value:"doing",title:"Doing",id:3},
    {value:"done",title:"Done",id:4}
]



export default function TableModal() {
    const thisDiv = useRef()
    const [date,setDate] = React.useState(new DateObject())

    const dispatch = useDispatch()

    const todo = useSelector(store => store.todo)
    const {isEditing} = useSelector(store => store.todos)

    const handleSubmit = () => {
        const newTodo = {
            ...todo,
            deadline:date.toString(),
            id: uuidv4()
        }
        dispatch(addTodo(newTodo))
        dispatch(filterTodosBySearch())
        hideModal()
    }

    const updateHandler = () => {
        dispatch(updateTodos({...todo,
            deadline:date.toString()}))
        dispatch(filterTodosBySearch())
        hideModal()
    }

    const hideModal = () => {
        dispatch(resetTodo())
        thisDiv.current.classList.add("fadeOut-anim")
        thisDiv.current.addEventListener("animationend",()=>{
            dispatch(hideTaskModal())
        })
    }

    return (
        <div className="h-full w-full bg-black bg-opacity-10 flex justify-center items-center absolute top-0 px-2">
             <div ref={thisDiv} className="w-[800px] bg-white rounded py-2 fadeIn-anim">
                <div className="px-2"><h1 className="text-xl pb-2">{isEditing ? "Edit Task" : "New Task"}</h1></div>
                <div className="border"></div>
                <div className="px-2 py-4 flex flex-col my-2">
                    <input type="text" className="w-full rounded border-2 p-1 mb-12" placeholder="Task Name" value={todo.task} onChange={(e)=>dispatch(changeTodo({...todo,task:e.target.value}))}/>
                    <div className="flex gap-4 items-center mb-12">
                        <div className="flex flex-1 flex-col">
                            <span>priority</span>
                            <Select options={priorityOptions} value={todo.priority} onChange={(e)=>dispatch(changeTodo({...todo,priority:e.target.value}))}/>
                        </div>
                        <div className="flex flex-1 flex-col">
                            <span>status</span>
                            <Select options={statusOptions} value={todo.status} onChange={(e)=>dispatch(changeTodo({...todo,status:e.target.value}))}/>
                        </div>
                        <div className="flex flex-1 flex-col">
                            <span className="text-end">deadline</span>
                            <Calendar value={date} onChange={setDate}/>
                        </div>
                    </div>
                    <textarea placeholder="Details (Optional)" rows="3" className="border-2 rounded p-1" value={todo.detail} onChange={(e)=>dispatch(changeTodo({...todo,detail:e.target.value}))}></textarea>
                </div>
                <div className="border"></div>
                <div className="flex justify-between px-2 py-3">
                    <button className="text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white transition duration-300 border border-[#0d6efd] py-1.5 px-3 rounded" onClick={hideModal}>cancel</button>
                    <button className="text-white bg-[#0d6efd] py-1.5 px-3 rounded" onClick={isEditing ? updateHandler : handleSubmit}>save</button>
                </div>
             </div>
        </div>
    )
}