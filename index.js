//Node Server which will handle socket io connections
const io = require('socket.io')(8000) //This means -> I want to require socket.io at 8000 port (we can take any port), so we initialize io

const users = {}
    //Now we are running a socket.io server which is an instance of http, this server listen the upcoming events

io.on('connection', socket => { //the time a connection comes in the socket, then run the arrow function that is defined
    //io.on is my socket.io instance that listens to various socket connection like harry connected, rohan connected, divya connected, etc
    //socket.on means that what will happen to a particular connection and it is handled by it
    //If any new user joins, let other users connected to the server know that a user has connected
    socket.on('new-user-joined', name => {
        // console.log("New user", myname);
        //socket.on is accepting an event 'new-user-joined' and when it gets that event, then we append that name in our users
        users[socket.id] = name;
        //broadcast.emit does emits the defined event to all the users except the newly connected user
        socket.broadcast.emit('user-joined', name);
    });

    //If someone sends a message, broadcast it to other people
    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] })
    });

    //If someone leaves tha chat, let others know
    socket.on('disconnect', () => {
        const name = users[socket.id];
        if (name) {
            socket.broadcast.emit('leave', name);
            delete users[socket.id];
        }
    });


    //socket.id means that every new connection has a unique id
    socket.on('typing', () => {
        socket.broadcast.emit('show-typing');
    });

    socket.on('stop-typing', () => {
        socket.broadcast.emit('hide-typing');
    });

})