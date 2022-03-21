import { useMemo, useState } from "react";
import "./App.css";
import PostFilter from "./Components/Post/PostFilter";
import PostForm from "./Components/Post/PostForm";
import PostList from "./Components/Post/PostList";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort] > b[filter.sort] ? 1 : -1
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => setPosts([...posts, newPost]);

  const removePost = (postId) => {
    const postIndex = posts.findIndex((post) => post.id === postId);

    posts.splice(postIndex, 1);
    setPosts([...posts]);
  };

  return (
    <>
      <div className="post">
        <PostForm createPost={createPost} />

        <PostFilter filter={filter} setFilter={setFilter} />

        <PostList
          posts={sortedAndSearchedPosts}
          removePost={removePost}
          title="React Js Postlari"
        />
      </div>
    </>
  );
}

export default App;
