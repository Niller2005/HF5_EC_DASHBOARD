import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';

const socket = io('http://hf5ecapi:3030', {
  transports: ['websocket'],
  forceNew: true,
});

const client = feathers();

client.configure(socketio(socket));

export const deviceService = client.service('devices');
