var colors = ["red", "green", "blue"];

function addRow() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  for (var i = 0; i < colors.length; i++) {
    var cell = row.insertCell(i);
    cell.innerHTML = colors[(i + table.rows.length - 1) % colors.length];
    cell.style.backgroundColor = colors[(i + table.rows.length - 1) % colors.length];
  }
}

function deleteRow() {
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;
  if (rowCount > 1) {
    table.deleteRow(-1);
  }
}