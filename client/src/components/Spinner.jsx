import React from 'react'
import { Puff } from 'react-loader-spinner'

const Spinner = () => {
  return (
    
  <Puff
    visible={true}
    height="80"
    width="80"
    color="aqua"
    ariaLabel="puff-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
  )
}

export default Spinner