import MyButton from "../UI/MyButton/MyButton";

function PostItem({ post, removePost, index }) {
  return (
    <div className="post-item">
      <div className="post-item-info">
        <strong className="post-item-index">{index + 1}</strong>

        <div>
          <h3 className="post-item-title">{post.title}</h3>
          <p className="post-item-body">{post.body}</p>
        </div>
      </div>

      <MyButton
        onClick={() => removePost(post.id)}
        className="post-item-button"
      >
        Delete
      </MyButton>
    </div>
  );
}

export default PostItem;
