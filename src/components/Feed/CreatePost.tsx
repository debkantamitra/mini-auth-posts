import React, { useState } from "react";

interface Props {
  handleOpenModal: () => void;
}

const CreatePost = ({ handleOpenModal }: Props) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {};

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-6">
      <h3 className="text-white mb-4">Create post</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 mb-4 bg-gray-700 rounded-lg text-gray-300"
          rows={4}
          placeholder="How are you feeling today?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={handleOpenModal}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
