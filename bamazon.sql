DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  productName VARCHAR(45) NULL,
  departmentName VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  qty INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (productName , departmentName, price, qty)
VALUES  ("T-Shirt - Red Logo", "apparel", 25, 99),
        ("T-Shirt - Blue Logo", "apparel", 25, 99),
        ("Short Shorts - by Elon", "apparel", 31, 29),
        ("Pink Jeans", "apparel", 75, 14),
        ("Orange Jeans", "apparel", 65, 12);
		("Gluten Free Today ebook", "recipe", 5.99, 4599),
        ("Pasta with Massa", "recipe", 2.29, 199),
        ("Steaks and Marinades", "recipe", 4.31, 6629),
        ("BEEF ITS WHAT FOR DIN DIN", "recipe", 5.75, 154),
        ("Cricket Salads", "recipe", 1.65, 12);               

SELECT * FROM products;