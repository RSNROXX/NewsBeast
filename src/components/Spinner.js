import React from 'react'

const Spinner = () => {
  return (
    <div className='d-flex justify-content-center'>
        <div className="spinner-border my-3" style = {{width: "3rem", height: "3rem"}} role="status">
        </div>
    </div>  
  )
}

export default Spinner