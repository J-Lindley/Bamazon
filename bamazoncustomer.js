var mysql = require("mysql");
var inquirer = require("inquirer")
require("console.table")

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "4Tolkien",
  database: "bamazonDB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("WELCOME TO BAMAZON")
  console.log("connected as id " + connection.threadId);
  afterConnection();

  //call the display inventory function
})

function afterConnection() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.table(res);
    inquirer.prompt([
      // Here we give the user a list to choose from.
      {
        type: "input",
        message: "What is the item id of the item you are interested in?",
        name: "selectId",
        validate: function (value) {
          if (isNaN(value) === false) {
            if (value > 0 && value <= res.length) {
              return true;
            }

          }
          return false;
        }

      },
      {
        type: "input",
        message: "How many would you like to purcahse?",
        name: "quantityPurchased"
      }
    ]).then(function (answer) {
      console.log(answer)
      var chosenItem;
      for (let i = 0; i < res.length; i++) {
        if (parseInt(answer.selectId) === res[i].item_id) {
          chosenItem = res[i]
        }
      }

      if (chosenItem.stock_quantity > answer.quantityPurchased) {
        var newQuantity = chosenItem.stock_quantity - answer.quantityPurchased
        console.log(newQuantity)
        connection.query(
          "UPDATE products SET ? WHERE ?",
          [
            {
              stock_quantity: newQuantity
            },
            {
              item_id: answer.selectID
            }
          ],
          function(error) {
            if (error) throw error;
            var orderTotal = answer.quantityPurchased * chosenItem.price
            console.log("Inventory updated");
            console.log("Your order has been accepted. Your total is: $" + orderTotal)
            
            
            inquirer
            .prompt({
              name: "orderagain",
              type: "rawlist",
              message: "Would you like to [order] order again or [finish]?",
              choices: ["ORDER", "FINISH"]
            })
            .then(function(answer) {
              // based on their answer, either call the bid or the post functions
              if (answer.orderagain.toUpperCase() === "ORDER") {
                afterConnection();
              } else {
                console.log("Thank you for ordering from Bamazon.com, we will be ruining your local mall asap.")
                connection.end();;
              }
            });
                


          }
        );

      } else {
        console.log("Sorry, we don't have enough inventory for that order.")
        afterConnection()
      }

    });
  })
};




//Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.



//6. The app should then prompt users with two messages.
// * The first should ask them the ID of the product they would like to buy.
// * The second message should ask how many units of the product they would like to buy.


//connection.end();

// 7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

//    * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.




  //  8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
  //  * This means updating the SQL database to reflect the remaining quantity.
  //  * Once the update goes through, show the customer the total cost of their purchase.
