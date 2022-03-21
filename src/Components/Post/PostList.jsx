import React from "react";
import PostItem from "./PostItem";

function PostList({ posts, removePost, title }) {
  return (
    <div>
      <h2 className="post-title">{title}</h2>
      <div>
        {posts.map((post, index) => (
          <PostItem
            post={post}
            removePost={removePost}
            index={index}
            key={post.id}
          />
        ))}
      </div>
    </div>
  );
}

export default PostList;
