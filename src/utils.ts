import { Reaction } from "interfaces";

export enum ReactionEnum {
  SAD = "SAD",
  WAVED = "WAVED",
}

export const getReactionIcon = (reaction: Reaction) => {
  if (reaction === ReactionEnum.SAD) {
    return "😞";
  } else if (reaction === ReactionEnum.WAVED) {
    return "👋";
  }
};
