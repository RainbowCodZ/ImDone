document.addEventListener('keydown', function() {
    if (event.keyCode == 123) {
      alert("Dev Tools Are Disabled For this Website");
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
      alert("Dev Tools Are Disabled For this Website");
       event.preventDefault();
      return false;
    } else if (event.ctrlKey && event.keyCode == 85) {
      alert("Dev Tools Are Disabled For this Website");
      return false;
    }
  }, false);
  
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      alert("Dev Tools Are Disabled For this Website");
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      alert("Dev Tools Are Disabled For this Website");
      window.event.returnValue = false;
    });
  }
