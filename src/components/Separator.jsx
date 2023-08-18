import React from 'react'

const Separator = (props) => {
  return (
    <>
        <div id={props.id} className='separator-title'>{props.title}</div>
        <hr/>
    </>
  )
}

export default Separator