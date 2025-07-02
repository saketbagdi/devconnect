import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const PostCard = ({ post }) => {
  const { author, title, content, timestamp } = post;
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);

  <link to={'/user/${author}'} style={{fonthWeight:'bold'}}>{author}</link>
  const [comments, setComments] = useState([
    'Great post!',
    'Well done!',
    '🔥🔥🔥',
  ]);
  const [newComment, setNewComment] = useState('');

  const { darkMode } = useTheme();

  const cardStyle = {
    background: darkMode ? '#1e1e1e' : '#f9f9f9',
    color: darkMode ? '#eee' : '#000',
    padding: '16px',
    marginBottom: '20px',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    border: darkMode? '1px solid #444':'1px solid #ddd',
  };

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div style={cardStyle}>
      <h3>{title}</h3>
      <p><strong>{author}</strong> • <small>{timestamp}</small></p>
      <p>{content}</p>
      <div style={{ marginTop: '8px', fontSize: '14px' }}>
        <button style={{padding:'6px 12px', marginRight:'10px', borderRadius:'6px', border:'none',cursor:'pointer',background: liked?'#ff5757':'#ccc', color: liked?'#fff':'#000'}}onClick={handleLike}>
          {liked ? 'Unlike' : 'Like'}
        </button>{' '}
        {likes} Likes •{comments.length} Comments
      </div>

      <form onSubmit={handleCommentSubmit} style={{ marginTop: '12px' }}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          style={{
            padding: '6px 12px',
            width: '80%',
            borderRadius: '8px',
            border: '1px solid #ccc',
            marginRight: '8px',
          }}
        />
        <button type="submit">Post</button>
      </form>
      <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
        {comments.map((cmt, idx) => (
          <li key={idx} style={{ marginBottom: '6px' }}> {cmt}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostCard;
