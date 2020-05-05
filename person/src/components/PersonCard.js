import React from 'react'
const PersonCard = props => {
    console.log(props)
  return (
      props.map(el => {
          return <div>{el.firstName}</div>
      })
  )
};

export default PersonCard