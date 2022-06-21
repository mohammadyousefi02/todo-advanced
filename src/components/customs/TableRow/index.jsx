import React from "react";
import Badge from "../Badge";

import TableBtn from "../TableBtn"

import {AiFillEye, MdDelete, MdModeEdit} from "../../../icons";

import {useDispatch} from "react-redux"

import {setDeletedTodoId,editTodo, filterTodosBySearch} from "../../../redux/slices/todosSlice"
import { showTaskModal } from "../../../redux/slices/showTaskModalSlice";
import { changeTodo } from "../../../redux/slices/todoSlice";
import { showViewTaskModal } from "../../../redux/slices/showViewTaskModalSlice";
import { showDeleteModal } from "../../../redux/slices/showDeleteModalSlice";

export default function TableRow({task,priority,status,deadline,detail,id}) {

    const dispatch = useDispatch()

    function editTodoHandler(){
        dispatch(showTaskModal())
        dispatch(editTodo(id))
        dispatch(changeTodo({task,priority,status,deadline,detail,id}))
        dispatch(filterTodosBySearch())
    }

    function showTaskModalHandler(){
        dispatch(showViewTaskModal())
        dispatch(changeTodo({task,priority,status,deadline,detail}))
    }

    function deleteHandler(){
        dispatch(setDeletedTodoId(id))
        dispatch(showDeleteModal())
    }

    const genStatusBgColor = () => {
        switch(status){
            case "todo":
                return "red"
            case "doing":
                return "yellow"
            default:
                return "green"
        }
    }

    const getPriorityBgColor = () => {
        switch(priority){
            case "high":
                return "red"
            case "medium":
                return "yellow"
            default:
                return ""
        }
    }

    return (
    <tr>
        <td>{task}</td>
        <td><Badge color={getPriorityBgColor()} title={priority}/></td>
        <td><Badge color={genStatusBgColor()} title={status}/> </td>
        <td><span className="rounded-full py-1 px-3 border border-[#0DCAF0]">{deadline.toString()}</span></td>
        <td className="text-white flex gap-1 justify-center items-center">
            <TableBtn Icon={MdDelete} onClick={deleteHandler}/>
            <TableBtn Icon={MdModeEdit} color={"blue"} onClick={editTodoHandler}/>
            <TableBtn Icon={AiFillEye}  color={"gray"} onClick={showTaskModalHandler}/>
        </td>
    </tr>
    )
}