import React from 'react'

const ShinyEffext = ({left,right,top,size=500}) => {

    const positionStyles={
        top:`${top}px`,
        width:`${size}px`,
        height:`${size}px`,
        zIndex:-1
    }

    if(left !== undefined){
        positionStyles.left=`${left}px`
    }

    if(right !== undefined){
        positionStyles.right=`${right}px`
    }

  return (
    <div className='shiney-effect' style={positionStyles}></div>
  )
}

export default ShinyEffext