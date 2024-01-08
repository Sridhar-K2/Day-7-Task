// e) Print the country that uses US dollars as currency.

//                    SOLUTION:


var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v2/all");
req.send();

req.onload = function () {
  var res = JSON.parse(req.response);
  var currency = res.filter((element) => {
    for (let currencyObj of element.currencies) {
      if (currencyObj.code === "USD") {
        return true;
      }
    }
    return false;
  });
  console.log(currency);
};

// =====================================================================================================================================================================================================================