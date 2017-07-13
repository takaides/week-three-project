// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1() {
  // Answer:
  let sum = 0;
  let avg = 0
  for (var i = 0; i < data.length; i++) {
    sum += data[i].price;
  }
  avg = (sum / data.length).toFixed(2);
  console.log("The average price is $" + avg);
  return avg;
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  // Answer:
  let items = [];
  let string = "";
  for (var i = 0; i < data.length; i++) {
    if ((data[i].price >= 14) && (data[i].price <= 18) && (data[i].currency_code === "USD")) {
      items.push(data[i].title);
    }
  }
  for (var i = 0; i < items.length; i++) {
    string += items[i] + "\n";
  }
  console.log(string);
  return string;
}
// as evidenced by question 3, question 2 should only return 4 items, not 5


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer:
  let items = [];
  let prices = [];
  let string = "";
  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      items.push(data[i].title);
      prices.push(data[i].price);
    }
  }
  for (var i = 0; i < items.length; i++) {
    string += items[i] + " costs " + prices[i] + " pounds.\n";
  }
  console.log(string);
  return string;
}



// 4: Display a list of all items who are made of wood.
function question4() {
  // Answer:
  let items = [];
  let string = "";
  for (var i = 0; i < data.length; i++) {
    var materials = [];
    for (var j = 0; j < data[i].materials.length; j++) {
      if (data[i].materials[j] === "wood") {
        items.push(data[i].title)
      }
    }
  }
  for (var i = 0; i < items.length; i++) {
    string += items[i] + " is made of wood.\n";
  }
  console.log(string);
  return string;
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5() {
  // Answer:
  let items = "";
  let string = "";
  for (var i = 0; i < data.length; i++) {
    var materials = [];
    if (data[i].materials.length >= 8) {
      items = data[i].title;
      for (var j = 0; j < data[i].materials.length; j++) {
        materials.push(data[i].materials[j])
      }
      string += items + " has " + data[i].materials.length + " materials.\n";
      for (var j = 0; j < materials.length; j++) {
        string += "- " + materials[j] + "\n"
      }
    }
  }
  console.log(string);
}


// 6: How many items were made by their sellers?
// Answer:
function question6() {
  // Answer:
  let items = [];
  let string = "";
  for (var i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      items.push(data[i].title)
    }
  }
  string += items.length + " items were made by their sellers.\n";
  console.log(string);
  return string;
}
