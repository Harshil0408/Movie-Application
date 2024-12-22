import React from 'react'
// import Horizontalcards from './Horizontalcards'

const Dropdown = ({title,options,func}) => {
  return (
    <div>
       <div className="select">
            <select defaultValue="all"  onChange={(func)} name="format" id="format">
                <option value="0" disabled>
                    {title}
                </option>
                {options.map((o,i)=>(
                    <option key={i} value={o}>
                        {o.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default Dropdown
