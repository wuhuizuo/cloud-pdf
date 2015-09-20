window.addEventListener('updateviewarea', function (evt) {
  if (!PDFViewerApplication.initialized) {
    return;
  }
  
  var location = evt.location;
  console.log(location);
}, true);