import React from 'react'

const Posts = ({ title, nextText, nextPost }) => {
  return (
    <div>
      <span>{ title }</span>
      <button
        onClick={() => {
          nextText();
          nextPost();
        }}> next </button>
    </div>
  )
}

export default Posts
