function start(){

    var buttonCode = document.querySelector('#button-code');
    buttonCode.addEventListener('click', handButtonClickCode);

}

    function handButtonClickCode(){
        var textMessage = document.querySelector('#input-message');
        
        var message = textMessage.value;
        var messageCode = [];
        var someMessageCode = []
        
        for(var cont = 0; cont < message.length; cont++){
             messageCode.push(message.charCodeAt(cont));
           someMessageCode.push(newMessageCode(messageCode[cont], cont));
        }
       
        // var newMessageCode = messageCode.map(x => x + 3);
        
        console.log(message);
        console.log(messageCode);
        console.log(someMessageCode);
        
    }

    function newMessageCode(number, cont){
       return number + cont
    }

start();
