import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Feed from "./components/Feed";
import AuthLayout from "./components/Auth/AuthLayout";

const App = () => {
  return (
    <div className="font-sans">
      <Router>
        <Routes>
          {/* Auth routes */}
          <Route
            path="/login"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />
          <Route
            path="/register"
            element={
              <AuthLayout>
                <Register />
              </AuthLayout>
            }
          />

          {/* Home route */}
          <Route path="/" element={<Feed />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
