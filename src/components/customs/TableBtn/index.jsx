import React from "react";




export default function TableBtn({Icon,color="#DA3544",hoverColor="#bb2d3b",...prop}) {
    // const btnClass = 


    return (
        <>
            <button className={`bg-[${color}] hover:bg-[${hoverColor}] py-1 px-2 rounded`} {...prop}><Icon/></button>
        </>
    )
}

