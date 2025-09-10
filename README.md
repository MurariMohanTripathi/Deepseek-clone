🚀 DeepSeek Clone

A functional clone of DeepSeek (OpenAI’s API) built using React + Vite (frontend) and Node.js + Express + MongoDB (backend).
The project integrates DeepSeek API to deliver real-time AI-powered responses with a clean, responsive UI built using Tailwind CSS.

✨ Features

🔐 Authentication System (optional – mention if you added login/signup).

💬 AI Chat Interface powered by DeepSeek API.

⚡ Frontend: Built with React + Vite for fast performance.

🎨 UI Styling: Fully responsive with Tailwind CSS.

🛠️ Backend: Node.js + Express handling API routes and requests.

📂 Database: MongoDB for storing user chats/sessions (if implemented).

🔄 Seamless API Integration with DeepSeek (OpenAI-compatible API).

🏗️ Tech Stack

Frontend:

React (with Vite)

Tailwind CSS

Backend:

Node.js

Express.js

MongoDB

AI Integration:

DeepSeek API (OpenAI’s API equivalent)

⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/deepseek-clone.git
cd deepseek-clone

2. Setup Backend
cd backend
npm install


Create a .env file in backend/ and add:

PORT=4000
MONGO_URI=your-mongodb-uri
DEEPSEEK_API_KEY=your-deepseek-api-key


Run backend:

npm start

3. Setup Frontend
cd frontend
npm install


Create a .env file in frontend/ and add:

VITE_BACKEND_URL=http://localhost:4000


Run frontend:

npm run dev

📸 Screenshots

(Add screenshots/gifs of your project UI here – chat screen, responses, etc.)

🚀 Future Enhancements

🔊 Add voice input/output support

📜 Chat history persistence per user

🌙 Dark/Light mode toggle

📱 Mobile-first optimization

🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

