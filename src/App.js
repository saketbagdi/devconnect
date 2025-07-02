import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';
import UserProfile from './pages/UserProfile';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/:username" element={<UserProfile />} />
        <Route path="*" element={<h2 style={{ padding: '20px' }}>404 - Page not found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;