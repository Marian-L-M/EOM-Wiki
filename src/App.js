import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// import './App.css';
import './css/style.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';
;


function App() {
  return (
    <Router>
      <Header />
      <Routes >
          < Route path='' exact element={<NotesListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
