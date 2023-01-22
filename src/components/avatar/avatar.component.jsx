import React from 'react'

const Avatar = ({imageUrl}) => {
  return (
    <>
    <img src={imageUrl}
    alt="avatar 1" style={{width: "45px", height: "100%"}}/>
    </>
  )
}

export default Avatar
