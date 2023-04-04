function changeColor() {
    var btn = document.getElementById("myButton");
    if (btn.style.backgroundColor === "red") {
      btn.style.backgroundColor = "green";
    } else if (btn.style.backgroundColor === "green") {
      btn.style.backgroundColor = "blue";
    } else {
      btn.style.backgroundColor = "red";
    }
  }