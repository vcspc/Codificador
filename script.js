function start(){

    var buttonCode = document.querySelector('#button-code');
    buttonCode.addEventListener('click', handButtonClickCode);

}

    function handButtonClickCode(){
        var textMessage = document.querySelector('#input-message');
        
        var message = textMessage.value;
        var messageCode = [];
        var newMessageCode = []
        
        for(var cont = 0; cont < message.length; cont++){
             messageCode.push(message.charCodeAt(cont));
           newMessageCode.push(addMessageCode(messageCode[cont], cont));
        }
       
        // var newMessageCode = messageCode.map(x => x + 3);
        
        console.log(message);
        console.log(messageCode);
        console.log(newMessageCode);
        
    }

    function addMessageCode(number, cont){
       return number + cont
    }

start();
