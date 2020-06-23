# videochat_without_socket

1. npm install
2. we are using watchify to give node like functionality on client side. It will create bundle.js file and we will use this file in index.html 
3. run the command - npx watchify ./public/index.js -o ./public/bundle.js in terminal 1.
4. run the command - npx watchify ./public/notInit.js -o ./public/bundle_notInit.js in terminal 2.
5. We need command 3,4 if you are going to make changes in index.js and notInit.js only.
6. run the command - npm start
7. open localhost:3000/index.html in one tab, localhost:3000/notInit.html

Project Console: https://console.firebase.google.com/project/webrtc-without-socket/overview
Hosting URL for Initiator: https://webrtc-without-socket.web.app
Hosting URL for Non Initiator: https://webrtc-without-socket.web.app/notInit.html
