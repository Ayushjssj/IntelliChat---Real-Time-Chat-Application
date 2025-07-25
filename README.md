# 💬 IntelliChat - Real-time Chat Application -
A simple and elegant real-time chat application built using Node.js, Socket.io, HTML, CSS, and Vanilla JavaScript. This project demonstrates how real-time communication works using WebSockets and provides a fun way to explore real-time messaging in action.

## 📌 Features : 

1) 🔗 Real-time communication using Socket.io
2) 💬 Instant message broadcasting to all connected users
3) 🎵 Message notification sound
4) 📸 Simple and clean UI with custom styles and icon
5) 🌐 Lightweight and browser-based (no frontend frameworks)
6) 💡 Built using only HTML, CSS, and JavaScript

## 🧰 Tech Stack
**Frontend:** HTML, CSS, JavaScript<br>
**Backend:** Node.js, Socket.io<br>
**Media:** Custom notification sound and chat icon<br>

## 📁 Project Structure
<pre>
IntelliChat-Chat-Application/
├── style.css               # Styling for the chat UI.
├── client.js               # Frontend Socket.io logic  
├── index.js                # Backend server using Socket.io
├── node_modules/           # Installed npm packages  
├── chat.png                    # Chat icon used in the UI
├── index.html                 # Main HTML file
├── package.json               # Project metadata and dependencies
├── package-lock.json          # Lock file for npm packages
├── ting.mp3                   # Notification sound for messages
├── web_socket.txt             # Info/reference about WebSocket (optional)
</pre>

## 🛠️ Setup Instructions
1) Clone the repository :<br>
git clone https://github.com/Ayushjssj/IntelliChat-Chat-Application.git<br>
cd IntelliChat-Chat-Application<br>

2) Install dependencies :<br>
cd nodeServer<br>
npm install<br>

3) Start the server :<br>
node index.js<br>

4) Open the application :<br>
   
Open your browser and go to:<br>
http://localhost:8000<br>
Now open the same URL in multiple tabs or devices to test real-time chat.<br>

## 📌 How it works
1) The backend (nodeServer/index.js) uses Socket.io to manage real-time connections.<br>
2) Each client connects to the server and emits messages using client.js.<br>
3) Messages are broadcast to all connected clients.<br>
4) A sound (ting.mp3) is played when a new message is received.<br>

## 🚀 Future Enhancements
1) User authentication<br>
2) Support for private messages or rooms<br>
3) Message timestamps<br>
4) Message history persistence with MongoDB<br>
5) Typing indicators<br>
6) Better UI/UX<br>

## 🙋‍♂️ Author
Ayush Pandey
GitHub: @Ayushjssj

## 📄 License
This project is licensed under the MIT License
