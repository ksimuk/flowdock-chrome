chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    "id": "flowdowck",
    "bounds": {
      "width": 1024,
      "height": 768
    }
  },
  function(win) {
      win.contentWindow.onload = function() {
        var webview = win.contentWindow.document.querySelector('webview');

        // Handle programmatic requests to open new windows and just pass
        // them along to the OS to be opened in the default browser.
        webview.addEventListener('newwindow', function(e) {
          e.preventDefault();
          win.contentWindow.open(e.targetUrl);
        });
      };
  });
});
