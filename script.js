function start(){

    var buttonCode = document.querySelector('#button-code');
    buttonCode.addEventListener('click', handButtonClick);

    //textMessage.onkeypress = keyPress;

    function handButtonClick(){
        var textMessage = document.querySelector('#input-message');
        
        var message = textMessage.value;

        message.charCodeAt;

    }

}

start();

