navigator.getUserMedia({
    video:true,
    audio:false
},function(stream){


var Peer=require('simple-peer')
var peer=new Peer({
    initiator : false,
    trickle:false,
    stream: stream,
    config: { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }, { 'urls': 'stun:stun.services.mozilla.com'}, {'urls': 'turn:numb.viagenie.ca','credential': '1212041996','username': 'faakeccnt1@gmail.com'}] },
})

peer.on('signal',function(data){
    document.getElementById('yourId').value=JSON.stringify(data)
})

document.getElementById('connect').addEventListener('click',function(){
    var otherId=JSON.parse(document.getElementById('otherId').value)
    peer.signal(otherId)
})

document.getElementById('send').addEventListener('click',function(){
    var yourMessage=document.getElementById('yourMessage').value
    peer.send(yourMessage)
})

peer.on('data',function(data){
    document.getElementById('messages').textContent += data +'\n'
})

peer.on('stream',function(stream){
    var video=document.createElement('video')
    //document.body.appendChild(video)
    //video.src=window.URL.createObjectURL(stream)
    video.srcObject=stream
    document.querySelector('#peerDiv').appendChild(video)
    video.play()
})
},function(err){
    console.log(err)
})