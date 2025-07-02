import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { darkMode, toggleTheme } = useTheme();

  const navStyle = {
    padding: '12px 20px',
    background: darkMode ? '#1c1c1c' : '#f5f5f5',
    color: darkMode ? '#fff' : '#000',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: darkMode? '1px solid #444' : '1px solid #ddd',
    // flexWrap: 'wrap',
    position: 'sticky',
    top: '0',
    zIndex: 100,
  };

  const linkGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  };

  const linkStyle = {
    color: darkMode ? '#ddd' : '#222',
    textDecoration: 'none',
    fontWeight: '500',
  };

  const buttonStyle = {
    background: darkMode ? '#333' : '#ddd',
    color: darkMode ? '#eee' : '#000',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
  };

  return (
    <nav style={navStyle}>
      <div style={linkGroupStyle}>
        <Link to="/" style={{color: darkMode ? '#fff' : '#000',fontWeight:'bold', fontSize:'20px'}}>DevConnect</Link>

        {user ? (
          <>
            <Link to="/feed" style={linkStyle}>📄 Feed</Link>
            <span style={{ fontWeight: 'bold' , marginRight:'15px' }}>Hello, {user.name}</span>
            <button onClick={logout} style={buttonStyle}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={linkStyle}>🔐 Login</Link>
            <Link to="/register" style={linkStyle}>📝 Register</Link>
          </>
        )}
      </div>

      <button onClick={toggleTheme} style={buttonStyle}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
