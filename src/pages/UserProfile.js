import React from 'react';
import { useParams } from 'react-router-dom';
import PostCard from '../components/PostCard';

const UserProfile = () => {
  const { username } = useParams();

  // Get posts from localStorage or fallback
  const savedPosts = JSON.parse(localStorage.getItem("devconnect-posts")) || [];
  const userPosts = savedPosts.filter(post => post.author.toLowerCase() === username.toLowerCase());

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ fontSize: '2rem' }}>👤 {username}'s Profile</h2>
      <p style={{ marginBottom: '20px' }}>Posts authored: <strong>{userPosts.length}</strong></p>

      {userPosts.length > 0 ? (
        userPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))
      ) : (
        <p>This user hasn't posted anything yet.</p>
      )}
    </div>
  );
};

export default UserProfile;