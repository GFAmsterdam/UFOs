function buildTable(data){
//First, clear out any existing data
    tbody.html("");

//Next, loop through each object in the data
//and append a row of cells for each value in the row
data.forEach((dataRow) => {
    //Append a row to the table
    let row = tbody.append("tr");

    //Loop through each field in the dataRow and add
    //each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
     );
  });
}

//Set up new function called "handleClick" which will handle 
//what to do after an input is given, 
//such as filtering the table by date
function handleClick(){
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;


if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  };

  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

