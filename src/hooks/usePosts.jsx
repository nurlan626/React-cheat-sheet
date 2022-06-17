import { useMemo } from "react";

export const useSortedPosts = (posts, selectedSort) => {
  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    } else {
      return posts;
    }
  }, [posts, selectedSort]);

  return sortedPosts;
};

export const usePosts = (posts, selectedSort, searchQuery) => {
  const sortedPosts = useSortedPosts(posts, selectedSort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPosts]);

  return sortedAndSearchedPosts;
};
