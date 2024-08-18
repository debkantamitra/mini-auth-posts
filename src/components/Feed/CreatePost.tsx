import React, { useState } from "react";
import PostLayout from "components/Feed/PostLayout";
import Button from "components/commons/Button";

interface Props {
  handleOpenModal: () => void;
}

const CreatePost = ({ handleOpenModal }: Props) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("creating post...");
  };

  return (
    <PostLayout>
      <>
        <h3 className="text-[#C5C7CA] mb-3">Create post</h3>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <div className="flex items-center bg-[#191920] p-4 rounded-lg w-full mb-4">
              <div className="flex-shrink-0 bg-[#27292D] rounded-full w-[48px] h-[48px] flex items-center justify-center text-[18px] leading-none">
                💬
              </div>

              <input
                type="text"
                placeholder="How are you feeling today?"
                className="bg-transparent border-none text-white ml-4 w-full focus:outline-none placeholder:text-[#7F8084]"
              />
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                onClick={handleOpenModal}
                text={"Post"}
                className={"max-w-[111px]"}
              />
            </div>
          </div>
        </form>
      </>
    </PostLayout>
  );
};

export default CreatePost;
