import React from "react";

export interface Post {
  id: string;
  username: string;
  timeAgo: string;
  content: string;
  commentsCount: number;
  edited?: boolean;
}

interface Props {
  post: Post;
}

const UserPost = ({ post }: Props) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <div className="flex items-center mb-2">
        <img
          src={`https://via.placeholder.com/50`}
          alt={post.username}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h4 className="text-white">{post.username}</h4>
          <span className="text-gray-400 text-sm">
            {post.timeAgo}
            {post.edited && " • Edited"}
          </span>
        </div>
      </div>
      <p className="text-gray-300 mb-2">{post.content}</p>
      <div className="flex items-center text-gray-400">
        <span>24 comments</span>
      </div>
    </div>
  );
};

export default UserPost;
