"use client";

import React, { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { LuShare2 } from "react-icons/lu";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

interface PostCardProps {
  post: {
    logo_text: string;
    name: string;
    college: string;
    course: string;
    year: string;
    time_uploaded: string;
    tag_label?: string; // e.g., "Resources"
    post_content: string;
    likes: { is_liked: boolean; count: number };
    comments: number;
    is_saved: boolean;
  };
}

function PostCard({ post }: PostCardProps) {
  const [like, setlike] = useState(post.likes.is_liked);
  const [likeno, setlikeno] = useState(post.likes.count);

  function likefnc() {
    if (like == true) {
      setlike(false);
      setlikeno(likeno - 1);
    } else {
      setlike(true);
      setlikeno(likeno + 1);
    }
  }

  return (
    <div className="w-full bg-[#0b0f17] text-white p-5 rounded-2xl border border-[#6974892d] font-sans shadow-lg duration-500 hover:border-[#302f6a]">
      {/* --- HEADER SECTION --- */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-sm text-font border-2 border-[#302f6a]">
            {post.logo_text}
          </div>

          {/* User Meta */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[15px]">{post.name}</span>
              <span className="text-[10px] font-bold bg-[#1e1b4b] text-[#818cf8] border border-[#312e81] px-1.5 py-0.5 rounded-md uppercase">
                {post.college}
              </span>
            </div>
            <p className="text-[12px] text-[#697489] mt-0.5">
              {post.course} · {post.year} · {post.time_uploaded}
            </p>
          </div>
        </div>

        {/* Right Badge & Menu */}
        <div className="flex items-center">
          {post.tag_label && (
            <span className="xl:block hidden text-[12px] font-medium text-[#00bfa5] bg-[#00bfa510] border border-[#00bfa533] px-3 py-1 rounded-xl">
              {post.tag_label}
            </span>
          )}
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="text-[14px] text-gray-200 leading-relaxed pl-1 pr-4 mb-5 whitespace-pre-line pre-wrap">
        {post.post_content}
      </div>

      {/* --- ACTION FOOTER BAR --- */}
      <div className="flex items-center justify-between border-t border-[#1e293b]/60 pt-3.5 mt-2">
        <div className="flex items-center gap-4">
          {/* Likes Button */}
          <button
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[12px] font-medium transition duration-300 ${
              like
                ? "bg-[#e11d4815] text-[#f43f5e]"
                : "bg-[#1a1e27] text-[#697489] hover:text-white"
            }`}
            onClick={likefnc}
          >
            {like ? <AiFillHeart size={16} /> : <AiOutlineHeart size={16} />}
            <span>{likeno}</span>
          </button>

          {/* Comments Button
          <button className="flex items-center gap-1.5 bg-[#1a1e27] text-[#697489] hover:text-white px-3 py-1.5 rounded-xl text-[12px] font-medium transition duration-300">
            <BiMessageRounded size={16} />
            <span>{post.comments}</span>
          </button> */}
        </div>

        {/* Save Bookmark Button */}
        <button
          className={`p-2 rounded-xl transition duration-300 ${
            post.is_saved
              ? "bg-[#312e8133] text-[#818cf8]"
              : "bg-[#1a1e27] text-[#697489] hover:text-white"
          }`}
        >
          {post.is_saved ? (
            <BsBookmarkFill size={15} />
          ) : (
            <BsBookmark size={15} />
          )}
        </button>
      </div>
    </div>
  );
}

export default PostCard;
