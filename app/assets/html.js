// import axios from './axios.js';
// $http = axios;

const ikan = {};
ikan.includeHTML = (cb) => {
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

ikan.getElements = (id) => {
  if (typeof id == "object") {
    return [id];
  } else {
    return document.querySelectorAll(id);
  }
};

ikan.filterHTML = (id, sel, filter) => {
  var a, b, c, i, ii, iii, hit;
  a = ikan.getElements(id);
  for (i = 0; i < a.length; i++) {
    b = ikan.getElements(sel);
    for (ii = 0; ii < b.length; ii++) {
      hit = 0;
      if (b[ii].innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
        hit = 1;
      }
      c = b[ii].getElementsByTagName("*");
      for (iii = 0; iii < c.length; iii++) {
        if (c[iii].innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
          hit = 1;
        }
      }
      if (hit == 1) {
        b[ii].style.display = "";
      } else {
        b[ii].style.display = "none";
      }
    }
  }
}

function ikanLink(link){
  document.getElementById('content').setAttribute("ikan-include-html", link);
  ikan.includeHTML();
}