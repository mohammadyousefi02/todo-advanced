import React from "react"


export default function Badge({title,color}) {
    const badgeClass = `${color === "" ? "text-black" : `bg-[${color}]`} rounded text-[10px] text-white px-2 py-0.5 rounded-full font-bold`
    return(
        <span className={badgeClass}>{title}</span>
    )
}