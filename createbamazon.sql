DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(120) NULL,
  department_name VARCHAR(120) NOT NULL,
  price decimal(10.2) NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

 INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "thing1", "general", 1.50, 10);
 INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)

VALUES (2, "thing2", "floral", 2.50, 15);
 INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)

VALUES (3, "thing3", "hardware", 3.50, 20);
 INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)

VALUES (4, "thing4", "electronics", 4.50, 25);
 INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)

VALUES (5, "thing5", "toys", 5.50, 30);
 INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)

VALUES (6, "thing6", "housewares", 6.50, 35);
 INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)

VALUES (7, "thing7", "clothing", 7.50, 40);
 INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)

VALUES (8, "thing8", "cosmetics", 8.50, 45);
 INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)

VALUES (9, "thing9", "games", 9.50, 50);
 INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)

VALUES (10, "thing10", "books", 10.50, 55)


