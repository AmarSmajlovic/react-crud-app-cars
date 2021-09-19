import React,{ useState,useEffect } from 'react'

function Search({ onChange }) {

    return (
        <div className="input-group mt-5 w-25">
  <input type="text" className="form-control" placeholder="search car..." onChange={onChange} aria-label="Default" aria-describedby="inputGroup-sizing-default" />
</div>
    )
}

export default Search
