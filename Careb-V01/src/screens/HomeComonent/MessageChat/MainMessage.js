// // MainMessage.js
// import React, { Component, useState, useEffect } from 'react';
// import HomeHeader from '../HomeHeader';
// import { io } from 'socket.io-client';

// const socket = io('http://localhost:4000'); 

// const MainMessage = () => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     // Listen for incoming messages
//     socket.on('message', (newMessage) => {
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//     });

//     return () => {
//       // Clean up socket connection when component unmounts
//       socket.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (message.trim() !== '') {
//       socket.emit('clientMessage', message);
//       setMessage('');
//     }
//   };

//   return (
//     <div>
//       <HomeHeader />
//       <div style={{ display: 'flex', width: '90%', justifyContent: 'center', margin: '0 auto', marginTop: 20 }}>
//         <div style={{ width: '60%', marginRight: '20px' }}>
//           {/* Your existing Message component */}
//           {/* <Message /> */}
//         </div>
//         <div style={{ width: '60%' }}>
//         <div style={{ height: '400px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
//   {messages.map((msg, index) => (
//     <div key={index}>{msg}</div>
//   ))}
// </div>

//           <div style={{ marginTop: '10px' }}>
//             <input
//               type="text"
//               placeholder="Type your message..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//             <button onClick={sendMessage}>Send</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainMessage;
