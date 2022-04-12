import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import About from "./components/layout/pages/About";
import Home from "./components/layout/pages/Home";
import NotFound from "./components/layout/pages/NotFound/NotFound";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Alert from "./components/Alert";
import "./App.css";
import User from "./components/users/User/User";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    window.addEventListener("hashchange", function (e) {
      console.log(e);
    });
  }, []);
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="components">
            <Navbar />
            <main>
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
