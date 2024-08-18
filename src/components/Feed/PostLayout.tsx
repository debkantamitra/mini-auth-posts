interface Props {
  children: JSX.Element;
}

const PostLayout = ({ children }: Props) => {
  return (
    <div className="bg-[#27292D] p-5 rounded-lg mb-3 border-2 border-[#35373B]">
      {children}
    </div>
  );
};

export default PostLayout;
