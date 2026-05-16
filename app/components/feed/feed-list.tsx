import React from "react";
import { posts } from "@/app/data/dummy-data";
import PostCard from "@/app/components/post/post-card";

function FeedList() {
  return (
    <div className="w-full lg:w-5/7 xl:w-3/5 flex flex-col gap-4">
      {/* 1. Added safety fallback check to ensure data exists */}
      {posts &&
        posts.map((singlePost) => (
          /* 2. Passing the whole object as a single 'post' prop */
          <PostCard key={singlePost.name} post={singlePost} />
        ))}
    </div>
  );
}

export default FeedList;
