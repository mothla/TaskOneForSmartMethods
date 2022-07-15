
/* JS comes here */
function runSpeechRecognition() {
   
    // get output div reference
    var output = document.getElementById("output");
    // get action element reference
    var action = document.getElementById("action");
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        action.innerHTML = "<small>استمع إليك، من فضلك تحدث..</small>";
    };
    
    recognition.onspeechend = function() {
        action.innerHTML = "<small>انتهى الاستماع، شكرًا لك.</small>";
        recognition.stop();
    }
  
    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        output.innerHTML = "<b>النص:</b> " + transcript + "<br/> <b>الدقة:</b> " + confidence*100+"%";
        output.classList.remove("hide");
    };
  
     // start recognition
     recognition.lang='ar';
     recognition.start();
     
     }