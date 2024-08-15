import Layout from "../commons/Layout";
import CreatePost from "./CreatePost";
import UserPosts from "./UserPosts";
import Header from "./Header";
import { useState } from "react";
import Modal from "../commons/Modal";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Layout>
      <>
        <Header
          title="Hello Jane"
          paragraph="How are you doing today? Would you like to share something with the community 🧑‍🤝‍🧑"
        />
        <CreatePost handleOpenModal={handleOpenModal} />
        <UserPosts />

        {isModalOpen && (
          <Modal onClose={handleCloseModal}>
            {isLoginModal ? (
              <Login
                handleFormSwitch={() => setIsLoginModal(false)}
                onCloseModal={handleCloseModal}
              />
            ) : (
              <Register
                handleFormSwitch={() => setIsLoginModal(true)}
                onCloseModal={handleCloseModal}
              />
            )}
          </Modal>
        )}
      </>
    </Layout>
  );
};

export default Home;
