/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function() {

  var windowHeight = document.getElementById('windowHeight');
  var windowWidth = document.getElementById('windowWidth');
  windowHeight.innerHTML = window.innerHeight;
  windowWidth.innerHTML = window.innerWidth;

  window.addEventListener("resize", function() {
    windowHeight.innerHTML = window.innerHeight;
    windowWidth.innerHTML = window.innerWidth;
  });

});
