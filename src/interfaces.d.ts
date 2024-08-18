import { ReactionEnum } from "utils";

export type Reaction = ReactionEnum.SAD | ReactionEnum.WAVED;

export interface Post {
  id: string;
  username: string;
  timeAgo: string;
  content: string;
  commentsCount: number;
  edited?: boolean;
  reaction: Reaction;
  userAvatar: string;
}
