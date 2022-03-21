import MyInput from "../UI/MyInput";
import MySelect from "../UI/MySelect";

function PostFilter({ filter, setFilter }) {
  return (
    <>
      <MyInput
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        className="post-form-input"
        value={filter.query}
        style={{ width: "100%" }}
        placeholder="Search ......"
      />

      <MySelect
        onChange={(sortedPost) => setFilter({ ...filter, sort: sortedPost })}
        value={filter.sort}
        defaultValue="Sort"
        options={[
          { value: "title", name: "By title" },
          { value: "body", name: "By body" },
        ]}
      />
    </>
  );
}

export default PostFilter;
