import React from "react";
import UserPost, { Post } from "./UserPost";

const index = () => {
  return (
    <div>
      {posts.map((post) => (
        <UserPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default index;

const posts: Post[] = [
  {
    id: "1",
    username: "Theresa Webb",
    timeAgo: "5 mins ago",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentsCount: 24,
  },
  {
    id: "2",
    username: "Marvin McKinney",
    timeAgo: "8 mins ago",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentsCount: 14,
    edited: true,
  },
  {
    id: "3",
    username: "Marvin McKinney",
    timeAgo: "8 mins ago",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentsCount: 14,
    edited: true,
  },
  {
    id: "4",
    username: "Marvin McKinney",
    timeAgo: "8 mins ago",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentsCount: 14,
    edited: true,
  },
  {
    id: "5",
    username: "Marvin McKinney",
    timeAgo: "8 mins ago",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentsCount: 14,
    edited: true,
  },
  {
    id: "6",
    username: "Marvin McKinney",
    timeAgo: "8 mins ago",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentsCount: 14,
    edited: true,
  },
];
