# 🚀 DevConnect

DevConnect is a modern microblogging web app built with React. It's a lightweight social platform where developers can share posts, schedule thoughts, and engage with others — all from a responsive, minimal interface.

![DevConnect Screenshot](https://your-screenshot-url-if-you-have-one.com)

---

## 🌟 Features

- 📝 Create, edit, and schedule posts
- 💬 Comment system
- ❤️ Like functionality
- 🔎 Search and filter posts
- 🌙 Dark / Light theme toggle
- 🔐 Local authentication with `localStorage`
- 🧾 Persistent data using `localStorage`
- 📱 Fully mobile responsive
- 👤 User profile pages

---

## 🛠️ Tech Stack

| Frontend       | Description               |
|----------------|---------------------------|
| React          | UI library                |
| React Router   | Page routing              |
| Context API    | Global state (Auth, Theme)|
| CSS / Global CSS | Styling and responsive UI|

> **Data is currently stored in `localStorage`. Future plans include MongoDB integration.**

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/devconnect.git
cd devconnect

2. Install Dependencies
bash
Copy code
npm install
3. Run the App
bash
Copy code
npm start
📁 Project Structure
php
Copy code
devconnect/
├── public/
├── src/
│   ├── components/      # Reusable components like PostCard, Navbar
│   ├── context/         # Theme and Auth context
│   ├── pages/           # Login, Register, Feed, Home, Profile
│   ├── data/            # Dummy posts (optional)
│   ├── global.css       # Global responsive styling
│   └── App.js
├── package.json
└── README.md
🚧 Future Enhancements
🔗 Backend with Node.js + Express

🌐 MongoDB or Supabase integration

🧑‍🤝‍🧑 Follower system

🧪 Unit + Integration Tests

📱 PWA support

📸 Upload media in posts

🌐 Live Demo
Coming soon on Netlify / Vercel!

📸 Screenshots
You can add screenshots here:

sql
Copy code
📸 Screenshot 1 - Home Page  
📸 Screenshot 2 - Feed Page with Search  
📸 Screenshot 3 - User Profile Page  
🤝 Contributing
Pull requests are welcome! If you’d like to add new features or suggest improvements, feel free to fork the repo and open a PR.

🧑‍💻 Author
Saket Bagdi
📧 saket.bagdi@example.com
🔗 LinkedIn
🐱 GitHub: @saketbagdi

📄 License
MIT License – feel free to use and modify!