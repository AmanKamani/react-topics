import React from 'react'

function TitleComponent(props: {title: string}) {
  return (
    <h2><u>{props.title}</u></h2>
  )
}

export default TitleComponent