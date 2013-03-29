
$(document).ready(function() {

    // Simple message passing
    // see evantPage.js
    //
	chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
	  console.log(response.farewell);
	});

	// chrome.extension.sendRequest({cmd: "read_file"}, function(html){
 //    	$("#footer").html(html);
	// });
  // Trollface image must be at 'my_extension/images/trollface.jpg'.
  // Uncomment, Turn on Breakpoint : http://stackoverflow.com/questions/895751/google-chrome-javascript-debugger-and-content-scripts
  // debugger;
 //  var trollface = chrome.extension.getURL("images/trollface.jpg");
 //  $('span.photo img').each(function(index, image){
 //    $(image).attr('src', trollface);
 //  });
 //  $('#footer').before('<div>TIme Line Here</div>');

 //  var periods = [
	//         ['20/03/1974', '15/09/1977'],
	//         ['06/03/1979', '28/02/1980'],
	//         ['01/12/1980', '17/06/1986'],
	//         ['23/06/1986', '17/10/2012'],
	//         ['13/01/1978', '07/12/1978'],
	// ];

	// var timeline = new Timeline(periods);

	// timeline.render();
});