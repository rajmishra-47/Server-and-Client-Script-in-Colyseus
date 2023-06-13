import { Client } from 'colyseus.js';
import ws from 'ws'
// Connect to the Colyseus server
const client = new Client('ws://localhost:2567');

// Join the room
client.joinOrCreate('my_room').then(room => {
  console.log('Joined the room');
  console.log("Yeet");

  // // Room event listeners
  room.onStateChange((state) => {
    console.log('Room state changed:', state);
  });

  room.onMessage((message) => {
    console.log('Received message from room:', message);
  });

  room.onLeave(() => {
    console.log('Left the room');
  });
}).catch(error => {
  console.error('Failed to join the room:', error);
});
