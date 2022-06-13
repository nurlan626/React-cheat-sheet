import React from 'react'
import PostItem from './PostItem'

const PostList = (props) => {
  return (
    <div>
        <h1>List of posts</h1>
        {props.posts.map((post, index) => {
        return(
          <PostItem removePost={props.removePost} number={index+1} post={post} key={post.id}/>
        )
      })}
    </div>
  )
}

export default PostList