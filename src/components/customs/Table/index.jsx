import React from "react"

import { useSelector, useDispatch } from "react-redux";

import { addTodo } from "../../../redux/slices/todosSlice";

import TableRow from "../TableRow";



export default function Table({data}){

    const {filteredTodos} = useSelector(store => store.todos);
    
    return (
        <table className="w-full">
            <thead className="text-[14px]">
                <tr>
                    <th className="text-start">Task</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Deadline</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className="text-[14px]">
                {!filteredTodos.length ? (
                    <tr>
                        <td colSpan={5} className="text-center-important">No matching item found</td>
                    </tr>
                ):data.map(todo => (
                    <TableRow key={todo.id} id={todo.id} task={todo.task} priority={todo.priority} deadline={todo.deadline} status={todo.status} detail={todo.detail}/>
                ))}
            </tbody>
        </table>
    )
}