import { useState } from "react";
import Layout from "components/commons/Layout";
import CreatePost from "components/Feed/CreatePost";
import UserPosts from "components/Feed/UserPosts";
import Header from "components/Feed/Header";
import Modal from "components/commons/Modal";
import Login from "components/Auth/Login";
import Register from "components/Auth/Register";

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
          paragraph="How are you doing today? Would you like to share something with the community 🤗"
        />
        <CreatePost handleOpenModal={handleOpenModal} />
        <UserPosts />

        {isModalOpen && (
          <Modal>
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
