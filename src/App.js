import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// import './App.css';
import './css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PageArea from './pages/PageArea';
;

;


function App() {
  return (
    <Router>
      <Header />
        <main>
          <Routes >
              < Route path='' exact element={<PageArea />} />
          </Routes>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
