function start(){

    var buttonCode = document.querySelector('#button-code');
    var buttonDecode = document.querySelector('#button-decode');
        buttonCode.addEventListener('click', handButtonClickCode);
        buttonDecode.addEventListener('click', handButtonClickDecode);

}

    function handButtonClickCode(){
        var textMessage = document.querySelector('#input-message');
        var codeResult = document.querySelector('#result');


        var message = textMessage.value;
        var messageCode = [];
        var keyMessageCode = [];
        var result = "";
        var messageTranslated = [];
    

        for(var cont = 0; cont < message.length; cont++){
            messageCode.push(message.charCodeAt(cont))
            keyMessageCode.push(addMessageCode(messageCode[cont], message))
            messageTranslated.push(String.fromCharCode(keyMessageCode[cont]))
            result = result + messageTranslated[cont]
        }

        codeResult.textContent = result;
        
    }

    function handButtonClickDecode(){
        var textMessage = document.querySelector('#input-message');
        var codeResult = document.querySelector('#result');


        var message = textMessage.value;
        var messageCode = [];
        var keyMessageCode = [];
        var result = "";
        var messageTranslated = [];
    

        for(var cont = 0; cont < message.length; cont++){
            messageCode.push(message.charCodeAt(cont))
            keyMessageCode.push(removeMessageCode(messageCode[cont], message))
            messageTranslated.push(String.fromCharCode(keyMessageCode[cont]))
            result = result + messageTranslated[cont]
        }

        codeResult.textContent = result;
    }

    function addMessageCode(number, message){

       for(var cont = 0; cont < message.length; cont++){

            var value = number + key[cont];


            return value;
        }
    }
        
    function removeMessageCode(number, message){
         
        for(var cont = 0; cont < message.length; cont++){
    
                var value = number - key[cont];
    
                return value;
            }
        }


var key = [2, 5, 4, 7, 10, 8, 9, 11];

start();