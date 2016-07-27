

welcomeMessage();

// // Called when the user clicks on the browser action.
 chrome.browserAction.onClicked.addListener(function(tab) {
  
		  chrome.tabs.executeScript({
										file: 'jquery.min.js'
									}, function() {
										// Guaranteed to execute only after the previous script returns
										chrome.tabs.executeScript({
											file: 'actionHandler.js'
										});
									});
	 
 }); 
 

 
 
 function welcomeMessage()
 {
	 chrome.notifications.create("welcome" 
	, {type:"basic" , title: "Olá!", message:"A extensão foi habilitada com sucesso! Bem vindo(a)!"  
	, iconUrl:"icon_128.png", appIconMaskUrl:"icon_128.png"}
	);
	 
 }
// // React when a browser action's icon is clicked.
// chrome.browserAction.onClicked.addListener(function(tab) {
  // var viewTabUrl = chrome.extension.getURL('image.html');
  // var imageUrl = /* an image's URL */;

  // // Look through all the pages in this extension to find one we can use.
  // var views = chrome.extension.getViews();
  // for (var i = 0; i < views.length; i++) {
    // var view = views[i];

    // // If this view has the right URL and hasn't been used yet...
    // if (view.location.href == viewTabUrl && !view.imageAlreadySet) {

      // // ...call one of its functions and set a property.
      // view.setImageUrl(imageUrl);
      // view.imageAlreadySet = true;
      // break; // we're done
    // }
  // }
// });
 