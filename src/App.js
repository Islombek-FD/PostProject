import { useEffect, useState } from "react";
import "./App.css";
import PostFilter from "./Components/Post/PostFilter";
import PostForm from "./Components/Post/PostForm";
import PostList from "./Components/Post/PostList";
import MyButton from "./Components/UI/MyButton/MyButton";
import MyModal from "./Components/UI/MyModal/MyModal";
import PostServes from "./Components/API/PostServes";
import { usePost } from "./Hooks/usePost";
import useFetching from "./Hooks/useFetching";
import SimpleMap from "./Components/Map";
import LoginByTelegram from "./Components/LoginByTelegram";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [isModal, setIsModal] = useState(false);
  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostServes.getAll();
    setPosts(posts);
  });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setIsModal(false);
  };

  const removePost = (postId) => {
    setPosts((posts) => posts.filter((post) => post.id !== postId));
  };

  useEffect(() => {
    fetchPosts();
  }, []); // eslint-disable-line

  return (
    <>
      <div className="container">
        {/* <SimpleMap /> */}

        <LoginByTelegram />
        {/* <MyButton onClick={() => setIsModal(true)} className="post-form-button">
          Create Post
        </MyButton>

        <MyModal visible={isModal} setVisible={setIsModal}>
          <PostForm createPost={createPost} setIsModal={setIsModal} />
        </MyModal>

        <PostFilter filter={filter} setFilter={setFilter} />

        {postError && <h2>{postError}</h2>}

        <PostList
          isPostsLoading={isPostsLoading}
          posts={sortedAndSearchedPosts}
          removePost={removePost}
          title="React Js Postlari"
        /> */}
      </div>
    </>
  );
}

export default App;
