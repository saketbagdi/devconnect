import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const {darkMode, toogleTheme}=useTheme();
  const { user } = useAuth();

  return (
    <div style={{ textAlign: 'center', padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{color: darkMode ? '#fff' : '#000',fontSize: '3rem', marginBottom: '10px' }}>🚀 Welcome to DevConnect</h1>
      <p style={{color: darkMode ? '#fff' : '#000', fontSize: '1.2rem', marginBottom: '30px' }}>
        A modern microblogging space for developers to connect, share ideas, and inspire.
      </p>

      {user ? (
        <Link to="/feed">
          <button style={btnStyle}>Go to Feed</button>
        </Link>
      ) : (
        <>
          <Link to="/register">
            <button style={btnStyle}>Get Started</button>
          </Link>
          <Link to="/login">
            <button style={{ ...btnStyle, marginLeft: '15px', background: '#333' }}>Login</button>
          </Link>
        </>
      )}
    </div>
  );
};

const btnStyle = {
  padding: '12px 24px',
  fontSize: '1rem',
  background: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background 0.3s ease'
};

export default Home;