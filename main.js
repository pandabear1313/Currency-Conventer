

function convert() {

    var num = parseFloat(document.querySelector("#num1").value);
    var selected = document.querySelector("#currency").value;
    var calculate;
    const yen = 54.32; USD = 2.70; Euro = ;

    if (selected == "jap") {

        calculate = num * yen;
        document.querySelector("#results").innerHTML = "¥" + calculate.toFixed(2);


    } else if (selected == "Euro") {

        calculate = num / 2.7;
        document.querySelector("#results").innerHTML = "¥" + calculate.toFixed(2);


    } if (selected == "USD") {

        calculate = num * yen;
        document.querySelector("#results").innerHTML = "$" + calculate.toFixed(2);


    } if (selected == "Pounds") {

        calculate = num * yen;
        document.querySelector("#results").innerHTML = "¥" + calculate.toFixed(2);


    } if (selected == "Korean") {

        calculate = num * yen;
        document.querySelector("#results").innerHTML = "¥" + calculate.toFixed(2);


    }

}