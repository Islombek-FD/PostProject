import React, { useState } from "react";
import MyButton from "../UI/MyButton";
import MyInput from "../UI/MyInput";

function PostForm({ createPost }) {
  const [post, setPost] = useState({ title: "", body: "" });

  const addPostForm = (evt) => {
    evt.preventDefault();

    const newPost = { ...post, id: Date.now() };
    createPost(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form onSubmit={addPostForm} className="post-form">
      <MyInput
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        className="post-form-input"
        type="text"
        value={post.title}
        placeholder="Post title"
      />

      <MyInput
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        className="post-form-input"
        type="text"
        value={post.body}
        placeholder="Post body"
      />

      <MyButton className="post-form-button" type="submit">
        Create post
      </MyButton>
    </form>
  );
}

export default PostForm;
