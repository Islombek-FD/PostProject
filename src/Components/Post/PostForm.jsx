import React, { useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

function PostForm({ createPost, setIsModal }) {
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

      <div className="post-form-buttons">
        <MyButton
          onClick={() => setIsModal(false)}
          className="post-form-button danger"
          type="button"
        >
          Close
        </MyButton>

        <MyButton className="post-form-button" type="submit">
          Create
        </MyButton>
      </div>
    </form>
  );
}

export default PostForm;
