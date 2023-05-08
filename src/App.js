import "./App.css";
import Header from "./Components/Header";
import Home from "./pages/Home";

// import Home from "./pages/Home";
import SignUp from "./pages/SignUp.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/signup" Component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
