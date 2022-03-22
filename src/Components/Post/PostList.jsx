import PostItem from "./PostItem";

function PostList({ isPostLoading, posts, removePost, title }) {
  if (isPostLoading) {
    return <h2 className="post-center">Post loading ...</h2>;
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
