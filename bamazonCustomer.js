var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: "localhost",
	port: "3306",
	user: "root",
	password: "",
	database: "bamazon"
});

var showProducts = function() {
	connection.query('SELECT * FROM products', function (error, results) {
    //beginPurchase(results);
	});
};


connection.query("SELECT * FROM products", function (err, res) {
    console.log("Please select a product:")
    res.forEach(function(item) {
        console.log('Item ID: ' + item.id + ' | Product Name: ' + item.productName + ' | Price: ' + item.price);
    });

	inquirer.prompt([{
		name: "itemId",
		type: "input",
		message: "Please select a product!  Enter the ID of what you'd like.."
	},
	{
		name: "qty",
		type: "input",
		message: "And what quantity would you like?"
	}]).then(function (itemObject) {
		connection.query('SELECT * FROM products where id=?', itemObject.itemId, function (err, res) {
			console.log(res);
			if (res.qty >= itemObject.qty) {
				var total = res[0].price * itemObject.qty
				console.log("Sucessful Order! \nThe total cost is $" + cost.toFixed(2) + "\nThx for ordering")
				var newQty = res[0].StockQty - itemObject.qty
				connection.query("UPDATE products SET ? WHERE ?", [{
					StockQty: newQty},
				{
					ProductName: itemObject.id
				}],

					function (err, res) {
					});
			}
			else {
				console.log("Sorry, not enough in stock!")
				showProducts()
			}
		})
	})
});