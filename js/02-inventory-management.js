/*eslint-env browser*/
function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("upd  - Update stock");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function viewProducts(arr) {
    arr.sort();
    "use strict";
    arr.forEach(function (product) {
        window.console.log(product[0] + ' ' + product[1] + '(' + product[2] + ')' + ' $' + product[3]);

    });
    window.console.log(""); // just a space line
}

function updStock(arr) {
    "use strict";
    var skuNumber, stockQuantity;

    //GET A SKU NUMBER TO BE UPDATED
     while (true) {
        skuNumber = window.prompt("Enter sku number");
        if(isNaN(skuNumber))  {
            window.alert("Please enter a valid sku number");
        } else {
            window.console.log("thank you " + skuNumber);
            break;
        }
     }
    /*arr.indexOf == -1*/
    stockQuantity = window.prompt("Enter a new stock quantity");

}

function main() {
    "use strict";
    var inventory, command;

    displayMenu();

    inventory = [[4824, "Shirt", 10, 15.99],
                 [2233, "Hat", 12, 14.99],
                 [6343, "Jeans", 22, 39.99],
                 [9382, "Jacket", 5, 49.99],
                 [3223, "Socks", 36, 9.99]
                ];
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                viewProducts(inventory);
            } else if (command === "upd") {
                updStock(inventory);
            } else {if (command === "exit") {
                break;
            } else {
                window.console.log("You entered invalid command");
            }
                   }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");

} // end of main function
main();


