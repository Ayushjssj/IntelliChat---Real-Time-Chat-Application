const socket = io('http://localhost:8000', { transports: ['websocket'] });

// DOM Elements
const form = document.getElementById("send-container");
const messageInput = document.getElementById("messageInp");
const messageContainer = document.querySelector(".container");

// Notification sound
const audio = new Audio('ting.mp3');

// Auto focus input
messageInput.focus();

// Typing indicator
let typingTimeout;
const typingDiv = document.createElement("div");
typingDiv.classList.add("typing");
typingDiv.innerText = "Someone is typing...";
typingDiv.style.display = "none";
messageContainer.appendChild(typingDiv);

// Append message
const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    const span = document.createElement('span');
    span.innerText = message;

    if (position === 'left' || position === 'right') {
        messageElement.classList.add(position);
        messageElement.appendChild(span);
    } else if (position === 'center') {
        messageElement.classList.add('center');
        messageElement.appendChild(span);
    }

    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;

    if (position === 'left') audio.play();
};

// Ask for username
let username = "";
while (!username) {
    username = prompt("Enter your name to join");
}
socket.emit('new-user-joined', username);

// Events
socket.on('user-joined', name => {
    append(`${name} joined the chat`, 'center');
});

socket.on('receive', data => {
    append(`${data.name}: ${data.message}`, 'left');
});

socket.on('leave', name => {
    append(`${name} left the chat`, 'center');
});

// Typing indicator
messageInput.addEventListener("input", () => {
    socket.emit("typing");
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => socket.emit("stop-typing"), 1000);
});

socket.on("show-typing", () => {
    typingDiv.style.display = "block";
    messageContainer.scrollTop = messageContainer.scrollHeight;
});

socket.on("hide-typing", () => {
    typingDiv.style.display = "none";
});

// Sending a message
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();
    if (message === '') return;

    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = '';
});