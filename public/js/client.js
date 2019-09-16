const ws = new WebSocket("ws://localhost:8080");
const sendMessage = () => {
  ws.send("Hello world");
};
ws.onmessage = event => console.log(event.data);
