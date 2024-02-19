import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate, useNavigate
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/userview/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import AdminDashboard from "./pages/adminview/AdminDashboard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const userLogin = useSelector((state) => state.login);
  const { userInfo } = userLogin;
  console.log(userInfo);


  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminDashboard />} exact />
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/profile" element={<UserProfilePage />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
