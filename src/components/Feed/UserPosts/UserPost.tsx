import { Post } from "interfaces";
import ThreeDotsButton from "components/commons/ThreeDotsButton";
import PostLayout from "components/Feed/PostLayout";
import { getReactionIcon } from "utils";

interface Props {
  post: Post;
}

const UserPost = ({ post }: Props) => {
  return (
    <PostLayout>
      <>
        <div className="flex justify-between items-center">
          <div className="flex items-center mb-5">
            <img
              src={post.userAvatar}
              alt={post.username}
              className="w-11 h-11 rounded-full mr-3"
            />
            <div>
              <h4 className="text-[#C5C7CA] font-medium">{post.username}</h4>
              <span className="text-[#7F8084] text-sm font-medium">
                {post.timeAgo}
                {post.edited && " • Edited"}
              </span>
            </div>
          </div>
          <ThreeDotsButton
            onClick={() => {
              alert("need to show list of options");
            }}
          />
        </div>
        <div className="flex text-[#7F8084] mb-3 bg-[#191920] p-4 rounded-lg space-x-4 min-w-[660px]">
          <span className="flex-shrink-0 bg-[#27292D] rounded-full w-[48px] h-[48px] flex items-center justify-center text-[18px] leading-none">
            {getReactionIcon(post.reaction)}
          </span>
          <p>{post.content}</p>
        </div>
        <div className="flex items-center text-[14px] text-[#7F8084] space-x-2">
          <img src="/assets/icons/reply.svg" alt="replies" />
          <span>24 comments</span>
        </div>
      </>
    </PostLayout>
  );
};

export default UserPost;
