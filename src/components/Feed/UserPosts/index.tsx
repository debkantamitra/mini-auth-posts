import React from "react";
import UserPost, { Post, ReactionEnum } from "./UserPost";

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
    timeAgo: "5mins ago",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentsCount: 24,
    reaction: ReactionEnum.WAVED,
    userAvatar: "/assets/icons/girl_user.svg",
  },
  {
    id: "2",
    username: "Marvin McKinney",
    timeAgo: "8mins ago",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentsCount: 14,
    edited: true,
    reaction: ReactionEnum.WAVED,
    userAvatar: "/assets/icons/boy_user.svg",
  },
  {
    id: "3",
    username: "Theresa Webb",
    timeAgo: "5mins ago",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentsCount: 24,
    reaction: ReactionEnum.WAVED,
    userAvatar: "/assets/icons/girl_user.svg",
  },
  {
    id: "4",
    username: "Marvin McKinney",
    timeAgo: "8mins ago",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentsCount: 14,
    edited: true,
    reaction: ReactionEnum.WAVED,
    userAvatar: "/assets/icons/boy_user.svg",
  },
  {
    id: "3",
    username: "Theresa Webb",
    timeAgo: "5mins ago",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentsCount: 24,
    reaction: ReactionEnum.WAVED,
    userAvatar: "/assets/icons/girl_user.svg",
  },
];
