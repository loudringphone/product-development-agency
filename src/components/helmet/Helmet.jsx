import React from 'react'

export const Helmet = (props) => {

    document.title = props.title + ' - Product Development Agency'
  return (
    <div>{props.children}</div>
  )
}