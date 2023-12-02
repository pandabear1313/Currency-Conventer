

function convert() {

    var num = parseFloat(document.querySelector("#num1").value);
    var selected = document.querySelector("#currency").value;
    var calculate;
    const yen1 = 54.32, Euro1 = 0.34, USD1 = 0.37, Pounds1 = 0.29, Canada1 = 0.50, Korean1 = 479.12;

    if(isNaN(num)) {

        alert("Enter a number");
    }

    if (selected == "jap") {

        calculate = num * yen1;
        document.querySelector("#results").innerHTML = "¥" + calculate.toFixed(2);


    } else if (selected == "Euro") {

        calculate = num * Euro1;
        document.querySelector("#results").innerHTML = "€" + calculate.toFixed(2);


    } else if (selected == "USD") {

        calculate = num * USD1;
        document.querySelector("#results").innerHTML = "$" + calculate.toFixed(2);


    } else if (selected == "Pounds") {

        calculate = num * Pounds1;
        document.querySelector("#results").innerHTML = "£" + calculate.toFixed(2);


    } else if (selected == "Canada") {

        calculate = num * Canada1;
        document.querySelector("#results").innerHTML = "CA$" + calculate.toFixed(2);

    } else if (selected == "Korean") {

        calculate = num * Korean1;
        document.querySelector("#results").innerHTML = "₩" + calculate.toFixed(2);
    }

}