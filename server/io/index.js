const socketHandler = (socket) => {
    socket.on('do_something', (data) => {
        socket.broadcast.emit('do_something', data)
    })
}

export default socketHandler
