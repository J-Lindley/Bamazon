var mysql = require("mysql");

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
  console.log("connected as id " + connection.threadId + "\n");
  createProducts();
});

function createProducts() {
  console.log("Inserting a new product...\n");
  var query = connection.query(
    "INSERT INTO products SET ?",
    {
      item_id: 1,
      product_name: "thing1",
      department_name: "general",
      price: 1.50,
      stock_quantity: 10
    },
    {
      item_id: 2,
      product_name: "thing2",
      department_name: "floral",
      price: 2.50,
      stock_quantity: 15
    },
    {
      item_id: 3,
      product_name: "thing3",
      department_name: "hardware",
      price: 3.50,
      stock_quantity: 20
    },
    {
      item_id: 4,
      product_name: "thing4",
      department_name: "electronics",
      price: 4.50,
      stock_quantity: 25
    },
    {
      item_id: 5,
      product_name: "thing5",
      department_name: "toys",
      price: 5.50,
      stock_quantity: 35
    },
    {
      item_id: 6,
      product_name: "thing6",
      department_name: "housewares",
      price: 1.50,
      stock_quantity: 45
    },
    {
      item_id: 7,
      product_name: "thing7",
      department_name: "clothing",
      price: 2.50,
      stock_quantity: 55
    },
    {
      item_id: 8,
      product_name: "thing8",
      department_name: "cosmetics",
      price: 3.50,
      stock_quantity: 65
    },
    {
      item_id: 9,
      product_name: "thing9",
      department_name: "games",
      price: 4.50,
      stock_quantity: 75
    },
    {
      item_id: 10,
      product_name: "thing10",
      department_name: "books",
      price: 5.50,
      stock_quantity: 85
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}


// I feel like just passing one object will work (1 question mark => 1 object as a second parameter, 2 question marks => 1 ARRAY with an object in each index)
var query = connection.query(
  "INSERT INTO products SET ?",
  {
    item_id: 1,
    product_name: "thing1",
    department_name: "general",
    price: 1.50,
    stock_quantity: 10
  },

// here you're passing an extra parameter
// Most importantly, you'll need to do 2 connection.queries, one for each item

var query = connection.query(
    "INSERT INTO products SET ?",
    {
      item_id: 1,
      product_name: "thing1",
      department_name: "general",
      price: 1.50,
      stock_quantity: 10
    },
    {
      item_id: 2,
      product_name: "thing2",
      department_name: "floral",
      price: 2.50,
      stock_quantity: 15
    },
