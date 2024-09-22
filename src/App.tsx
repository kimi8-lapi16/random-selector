import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MonsterHunter from "./components/monhun/Monhun";
import Spla from "./components/spla/Spla";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Splatoon</Link>
          </li>
          <li>
            <Link to="/monhun">Monster Hunter</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Spla />} />
        <Route path="/monhun" element={<MonsterHunter />} />
      </Routes>
    </Router>
  );
}

export default App;
