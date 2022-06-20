import React from 'react'

function Select({options = "",className="",...prop}) {
  const selectClass = `border-2 rounded text-[#212529] flex-1 ${className}`
  return (
    <select {...prop} className={selectClass}>
        {options && options.map(o=>(
            <option key={o.id} value={o.value}>{o.title}</option>
        ))}
    </select>
  )
}

export default Select