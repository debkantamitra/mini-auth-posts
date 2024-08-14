import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Feed from "./components/Feed";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Home route */}
        <Route path="/" element={<Feed />} />
      </Routes>
    </Router>
  );
};

export default App;
