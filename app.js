var target = document.querySelectorAll("button")


for(var i=0; i< target.length; i++){
    
    target[i].addEventListener('click', function(){
    
        key_picked(this.innerHTML);
        flash(this.innerHTML);
        
    

    })
  
    document.addEventListener("keypress", function(event){
        try{
            key_picked(event.key);
            key_picked(event.key);
            flash(event.key);
            }
        catch(err){
            console.log('wrong key');
           
        }

    })

}


function key_picked(inner){
    switch(inner){
        case 'w':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            
            
            break;
        case 'a':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case'k':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case'i':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    }
}
function flash(inner){
    var key = document.querySelector("."+ inner).classList;
    key.add("indicate_btn")
    setTimeout(function(){
        key.remove("indicate_btn");

    }, 95);
    
}