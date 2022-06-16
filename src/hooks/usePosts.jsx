import { useMemo } from "react";

export  const useSortedPosts = (selectedSort, posts ) => {
    const sortedPosts = useMemo(() => {
        console.log("sortedPosts");
        if (selectedSort) {
          return [...posts].sort((a, b) =>
            a[selectedSort].localeCompare(b[selectedSort])
          );
        } else {
          return posts;
        }
      }, [posts, selectedSort]);

      return sortedPosts;

}


export const useSortedAndSearchedPosts = (selectedSort, posts, searchQuery) => {
    const sortedPosts = useSortedPosts(selectedSort, posts);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) =>
          post.title.toLowerCase().includes(searchQuery)
        );
      }, [searchQuery, sortedPosts]);

      return sortedAndSearchedPosts;

}


