import PostItem from "./PostItem";
import Loader from "../UI/Loader/Loader";

function PostList({ isPostsLoading, posts, removePost, title }) {
  if (isPostsLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader />
      </div>
    );
  } else if (posts === []) {
    return <h2 className="post-center">Post not found!</h2>;
  } else if (posts !== []) {
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
}

export default PostList;
