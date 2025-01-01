import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";
import "./App.css";
import { ApiDataProvider } from "./components";

function App() {
  return (
    <ApiDataProvider>
      <Router>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
        </Routes>
      </Router>
    </ApiDataProvider>
  );
}

export default App;
