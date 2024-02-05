import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Listopia from "./pages/listopia/Listopia";
import { Completed } from "./pages/completed";

const App = () => {
  return (
    <main className="relative">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Listopia />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
