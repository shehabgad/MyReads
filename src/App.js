import "./App.css";
import MainPage from "./MainPage"
import SearchPage from "./SearchPage"
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
