import { useMemo } from "react";

export const SortedPost = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => (a[sort] > b[sort] ? 1 : -1));
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePost = (posts, sort, query) => {
  const sortedPosts = SortedPost(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
