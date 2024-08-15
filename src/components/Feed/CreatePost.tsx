import React, { useState } from "react";
import PostLayout from "./PostLayout";
import Button from "../commons/Button";

interface Props {
  handleOpenModal: () => void;
}

const CreatePost = ({ handleOpenModal }: Props) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <PostLayout>
      <>
        <h3 className="text-white mb-4">Create post</h3>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <textarea
              className="w-full p-2 mb-4 bg-[#191920] rounded-lg text-gray-300"
              rows={4}
              placeholder="How are you feeling today?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
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
