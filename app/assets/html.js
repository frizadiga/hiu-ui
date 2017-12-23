// import axios from './axios.js';
// $http = axios;

const ikan = {};
ikan.includeHTML = function(cb) {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("ikan-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
            console.log("Page not found.");
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
            console.log("Page not found.");
          }
          elmnt.removeAttribute("ikan-include-html");
          ikan.includeHTML(cb);
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  if (cb) cb();
};

function ikanLink(link){
  document.getElementById('content').setAttribute("ikan-include-html", link);
  ikan.includeHTML();
}