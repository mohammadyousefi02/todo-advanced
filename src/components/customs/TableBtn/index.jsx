import React from "react";




export default function TableBtn({Icon,color="",...prop}) {
    const btnClass = `${color === "blue" ? "bg-[#0d6efd] hover:bg-[#0b5ed7]":
        color === "gray" ?  "bg-[#6c757d] hover:bg-[#5c636a]":
        "bg-[#DA3544] hover:bg-[#bb2d3b]" 
    }  py-1 px-2 rounded`
    return (
        <>
            <button className={btnClass} {...prop}><Icon/></button>
        </>
    )
}

