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
    "use strict";
    arr.sort();
    arr.forEach(function (product) {
        window.console.log(product[0] + ' ' + product[1] + '(' + product[2] + ')' + ' $' + product[3]);

    });
    window.console.log(""); // just a space line
}

function updStock(arr) {
    "use strict";
    var skuNumber, stockQuantity, i, index;

    //GET A SKU NUMBER TO BE UPDATED
sku_number_loop:
    while (true) {
        skuNumber = Number(window.prompt("Enter sku number"));
        if (isNaN(skuNumber)) {
            window.alert("Please enter a valid sku number");
        } else {
              /* find index of skunumber in multidimensional array */
            index = -1;
            for (i = 0; i < arr.length; i++) {
                //window.console.log(arr[i][0]);
                if (arr[i][0] === skuNumber) {
                    index = i;
                    window.console.log("sku number", skuNumber, "found, index =", index);
                    break sku_number_loop;
                }
            }
            if (index === -1) {
                window.alert("you entered wrong sku number:",skuNumber,"try again");
            }
       }
     } // end while true loop getting a valid sku number
stock_quantity_loop:
    while(true) {
         stockQuantity = Number(window.prompt("Enter a new stock quantity"));
         if (isNaN(stockQuantity)) {
             window.alert("Please enter a number for stock quantity");
         } else {
             arr[index][2] = stockQuantity;
             window.alert("Stock quantity is updated for sku number",skuNumber);
             break;
        }
    } // end while loop for stockQuantity

} // end of function updStock

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
                window.alert("You entered invalid command");
            }
                   }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");

} // end of main function
main();
