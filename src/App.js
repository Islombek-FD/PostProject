import { useState } from "react";
import "./App.css";
import PostForm from "./Components/Post/PostForm";
import PostList from "./Components/Post/PostList";
import MySelect from "./Components/UI/MySelect";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => setPosts([...posts, newPost]);

  const removePost = (postId) => {
    const postIndex = posts.findIndex((post) => post.id === postId);

    posts.splice(postIndex, 1);
    setPosts([...posts]);
  };

  const sortPost = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => (a[sort] > b[sort] ? 1 : -1)));
  };

  return (
    <>
      <div className="post">
        <PostForm createPost={createPost} />

        <hr />

        <MySelect
          onChange={sortPost}
          value={selectedSort}
          defaultValue="Sort"
          options={[
            { value: "title", name: "By title" },
            { value: "body", name: "By body" },
          ]}
        />

        {posts.length !== 0 ? (
          <PostList
            posts={posts}
            removePost={removePost}
            title="React Js Postlari"
          />
        ) : (
          <h2 className="post-title">Post not found!</h2>
        )}
      </div>
    </>
  );
}

export default App;
