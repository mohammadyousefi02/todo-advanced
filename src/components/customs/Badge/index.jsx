import React from "react"


export default function Badge({title,color}) {
    const badgeClass = `${
        color === "red" ? "bg-[#DA3544]":
        color === "yellow" ? "bg-[#FFC107]":
        color === "green" ? "bg-[#198754]" :
        "bg-[#F8F9FA] text-black"
    } rounded text-[10px] text-white px-2 py-0.5 rounded-full font-bold`
    return(
        <span className={badgeClass}>{title}</span>
    )
}