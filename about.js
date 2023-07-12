/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("navy");
    if (x.className === "navvy") {
      x.className += " responsive";
    } else {
      x.className = "navvy";
    }
  }