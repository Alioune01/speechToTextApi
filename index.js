var ourMessage = $("#theH");
if('webkitSpeechRecognition' in window)
{
	var final_transcript = "";
	var interim_transcript = "";
	ourMessage.text("Yes");
	console.log("speechAvaibalbe?: Yes");
	var recognition = new webkitSpeechRecognition();
	  recognition.continuous = true;
	  recognition.interimResults = false;
	  recognition.lang = "en-US";
	  recognition.start();
	 
	 recognition.onstart = function()
	 {
		console.log("Yes, it started");
		
		recognition.onresult = function(e) {
		console.log("You should have a result right now...");
    var interim_transcript = '';
		console.log(`e.resultIndex: ${e.resultIndex}`);
    for (var i = e.resultIndex; i < e.results.length; ++i) {
		console.log(`e.results[${i}].isFinal: ${e.results[i].isFinal}`);
      if (e.results[i].isFinal) {
	  console.log(`final: ${e.results[i][0].transcript}`);
        final_transcript += e.results[i][0].transcript;
      } else {
		  console.log(`final: ${e.results[i][0].transcript}`);
        interim_transcript += e.results[i][0].transcript;
      }
    }
	console.log(final_transcript);
    $("#theInput").val(linebreak(final_transcript));
    $("#theOtherInput").val(linebreak(interim_transcript));
  };
  
  recognition.onerror = function(event) {
    console.log(event.error);
	};
	 };
}
else
{
	ourMessage.text("No");
}