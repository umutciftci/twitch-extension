setInterval(function() {
  var elements = document.getElementsByClassName("tw-button tw-button--success tw-interactive");

  elements = Array.prototype.slice.call(elements);

   if(!elements.length) return;
  elements.forEach(function(btn) {
     btn.click();
  });
}, 200);

