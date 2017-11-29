import React from 'react'

const Name = ({
  children
}) => (
  <p>
    { children }
  </p>
)

const ProfileImage = ({
  imageURL
}) => (
  <img src={imageURL}/>
)

export { Name, ProfileImage }