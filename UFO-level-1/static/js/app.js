// from data.js
var tableData = data;

// Select where tbody is using d3
var tbody = d3.select("tbody");

// Place the data into a table
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        if (key === "city") {
            cell.text(value.charAt(0).toUpperCase() + value.substring(1));
        }
        else if (key === "state") {
            cell.text(value.toUpperCase());
        }
        else if (key === "country") {
            cell.text(value.toUpperCase());
        }
        else if (key === "shape") {
            cell.text(value.charAt(0).toUpperCase() + value.substring(1));
        }
        else{
            cell.text(value);
        };
    });
});

// use d3 to assign the filter button as a variable
var button = d3.select("#filter-btn");

// listen for button click
button.on("click", function() {

    //select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    var dates = tableData.map(sighting => sighting.datetime);

    tbody.html("");

    if (inputValue === "") {
        // Place the data into a table
        tableData.forEach((sighting) => {
            var row = tbody.append("tr");
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append("td");
                if (key === "city") {
                    cell.text(value.charAt(0).toUpperCase() + value.substring(1));
                }
                else if (key === "state") {
                    cell.text(value.toUpperCase());
                }
                else if (key === "country") {
                    cell.text(value.toUpperCase());
                }
                else if (key === "shape") {
                    cell.text(value.charAt(0).toUpperCase() + value.substring(1));
                }
                else{
                    cell.text(value);
                };
            });
        });
    }

    else if (dates.includes(inputValue) === false) {
        var row = tbody.append("tr");
        var cell = row.append("td");
        cell.text("Try a different date!")
    }

    else {
        // Place the data into a table
        filteredData.forEach((sighting) => {
            var row = tbody.append("tr");
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append("td");
                if (key === "city") {
                    cell.text(value.charAt(0).toUpperCase() + value.substring(1));
                }
                else if (key === "state") {
                    cell.text(value.toUpperCase());
                }
                else if (key === "country") {
                    cell.text(value.toUpperCase());
                }
                else if (key === "shape") {
                    cell.text(value.charAt(0).toUpperCase() + value.substring(1));
                }
                else{
                    cell.text(value);
                };
            });
        });
    };
});