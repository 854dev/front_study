// Variables
var messages = document.querySelector('.message-list')
var btn = document.querySelector('.send')
var input = document.querySelector('input')

// Button/Enter Key
btn.addEventListener('click', sendMessage)
input.addEventListener('keyup', function(e){ if(e.keyCode == 13) sendMessage() })

// Messenger Functions
function sendMessage(){
   var msg = input.value;
   input.value = ''
   writeLine(msg)
}
function addMessage(e){
   var msg = e.data ? JSON.parse(e.data) : e;
   writeLine(`${msg.FROM}: ${msg.MESSAGE}`)
}
function writeLine(text){
   var message = document.createElement('li')
   message.classList.add('message-item', 'item-secondary')
   message.innerHTML = 'Miguel says: ' + text
   messages.appendChild(message)
   messages.scrollTop = messages.scrollHeight;
}

//https://dororongju.tistory.com/151