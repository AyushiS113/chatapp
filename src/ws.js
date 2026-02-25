import { io } from 'socket.io-client';

export function connectWS() {
    return io('https://chatapp-backend-yim7.onrender.com/');
}
