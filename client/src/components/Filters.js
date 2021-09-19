import React from 'react'

function Filters({ options,onChange,placeholder }) {


    return (
        <div className="mt-5 d-flex">
          <select className="form-select" aria-label="Default select example" onChange={onChange}>
            <option value="" className="text-muted">Select {placeholder}</option>
            {options.map((option) => (
              <option value={option.name}>{option.name}</option>
            ))}
          </select>
        </div>
    )
}

export default Filters
