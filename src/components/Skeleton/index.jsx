import React from 'react'

const Skeleton = ({classname = ''}) => {
  return (
    <div className={`skeleton + ${classname}`}></div>
  )
}

export default Skeleton