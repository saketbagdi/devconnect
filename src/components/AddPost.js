import React, {use, useState} from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const AddPost = ({ onAdd }) => {
    const {user} = useAuth();
    const [title, setTitle]= useState('');
    const [content, setContent]= useState('');
    const [scheduledTime, setScheduledTime] = useState('');
    const { darkMode } = useTheme();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title.trim() || !content.trim())return;
                const newPost={
                id: Date.now(),
                title, content, author: user.name,timeStamp: new Date().toLocaleString(), likes:0,
            };

            onAdd(newPost);
            setTitle('');
            setContent('');
            setScheduledTime('');
        };
        return(
            <form style={{background: darkMode ? '#1f1f1f':'#fafafa', padding:'16px', borderRadius:'12px', boxShadow:'0 2px 8px rgba(0,0,0,0.08)' , marginBottom:'20px'}} onSubmit={handleSubmit}>
                <h3 style={{marginBottom:'10px'}}>Create a New Post</h3>
                <input type="datetime-local" value={scheduledTime} onChange={(e)=>setScheduledTime(e.target.value)} style={{display:'block', marginBottom:'10px', padding:'8px'}}/>
                <input type="text" placeholder="Post Title" value={title} onChange={(e)=>setTitle(e.target.value)} required style={{display: 'block', marginBottom: '10px', width:'100%', padding:'8px'}}/>
                <textarea placeholder="Post Content" value={content} onChange={(e)=>setContent(e.target.value)} required rows={4} style={{display: 'block', marginBottom: '10px', width:'100%', padding:'8px'}}></textarea>
                <button type="submit">Post</button>
            </form>
        );
};

export default AddPost;