import React from 'react'
import { RotatingSquare } from 'react-loader-spinner'

function Loader() {
  return (
      <div className=' w-screen h-screen flex justify-center items-center' style={{ backgroundColor:"#471069"}}>
       <RotatingSquare
            visible={true}
            height="100"
            width="100"
            color="#30c5d2"
            ariaLabel="rotating-square-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </div>
  )
}

export default Loader