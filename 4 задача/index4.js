function addRow() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "Новая ячейка 1";
    cell2.innerHTML = "Новая ячейка 2";
    cell3.innerHTML = "Новая ячейка 3";
  }
  
  function deleteRow() {
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;
    if (rowCount > 1) {
      table.deleteRow(-1);
    }
  }