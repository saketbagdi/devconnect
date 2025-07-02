import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import AddPost from "../components/AddPost";
import { useTheme } from "../context/ThemeContext";

const Feed = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("devconnect-posts");
    return saved ? JSON.parse(saved) : [];
  });

  const [scheduledPosts, setScheduledPosts] = useState(() => {
    const saved = localStorage.getItem("devconnect-scheduled");
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [showAddPost, setShowAddPost] = useState(false);

  // Add post handler
  const handleAddPost = (post) => {
    if (post.scheduledFor) {
      setScheduledPosts([...scheduledPosts, post]);
    } else {
      setPosts([post, ...posts]);
    }
  };

  // Polling scheduled posts
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      const readyToPost = scheduledPosts.filter(
        (p) => new Date(p.scheduledFor) <= now
      );
      const stillScheduled = scheduledPosts.filter(
        (p) => new Date(p.scheduledFor) > now
      );

      if (readyToPost.length > 0) {
        setPosts((prev) => [...readyToPost, ...prev]);
        setScheduledPosts(stillScheduled);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [scheduledPosts]);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("devconnect-posts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem("devconnect-scheduled", JSON.stringify(scheduledPosts));
  }, [scheduledPosts]);

  // Search filter
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
      <h2 style={{ color: darkMode ? '#fff' : '#000', marginBottom: "10px" }}>Your Feed</h2>

      <button
        onClick={() => setShowAddPost(!showAddPost)}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          borderRadius: "8px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        {showAddPost ? "Close" : " Create Post"}
      </button>

      {showAddPost && (
        <AddPost onAdd={handleAddPost} />
      )}

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search posts"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      {/* Feed */}
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default Feed;
