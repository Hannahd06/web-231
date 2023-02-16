/*
============================================
; Title:  classes.js
; Author: Hannah Del Real
; Date:   15 February 2023
; Description: JavaScript for delreal-javazon.html, demonstrating use of classes and constructors and binding properties to display in html tables
;===========================================
*/

class Product {
    constructor (id, description, price, quantity) {
        this.id = id;
        this.description = description;
        this.price = price.toFixed(2);
        this.quantity = quantity;
        this.totalValue = (this.quantity * this.price).toFixed(2);
    }
}

class Services {
    constructor (id, description, hourlyRate, min) {
        this.id = id;
        this.description = description;
        this.hourlyRate = hourlyRate.toFixed(2);
        this.min = min;
    }
}

class Employee {
    constructor (id, lastName, firstName, salary) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.salary = salary.toFixed(2);
    }
}

// Variable and values for products.
let designWebsite = new Product (9781118008188, "HTML and CSS: Design and Build Websites", 22.26, 10);
let guideJavaScript = new Product (97814919502023, "JavaScript: The Definitive Guide 7/E", 41.33, 7);
let guideJSPattern = new Product (9781449331818,"Learning JavaScript Design Patterns 1/E", 25.99, 3);
let guideNode = new Product (9781617292422, "Express in Action: Writing, building, and testing Node.js applications 1/E", 34.91, 3);
let guideMongo = new Product (9781491954461, "MongoDB The Definitive Guide", 33.70, 8);

// Variables and values for services.
let webDesign = new Services (100, "Website Design", 150, 25);
let consultingDevOps = new Services (102, "DevOps Consulting", 125, 50);
let dataDesign = new Services (102, "Database Design", 125, 15);

// Variables and values for employees.
let ludwig = new Employee (1007, "Beethoven", "Ludwig", 13.99);
let johann = new Employee (1008, "Bach", "Johann", 22.30);
let wolfgang = new Employee (1009, "Mozart", "Wolfgang", 19.50);
let johannes = new Employee (1010, "Brahms", "Johannes", 12)
let joseph = new Employee (1011, "Haydn", "Joseph", 32.50)


// Bind properties for products  to HTML table for Javazon Products, product 1.
document.getElementById("txtDesignWebsiteID").innerHTML = designWebsite.id;
document.getElementById("txtDesignWebsitedescript").innerHTML = designWebsite.description;
document.getElementById("txtDesignWebsiteprice").innerHTML = designWebsite.price;
document.getElementById("txtDesignWebsitequantity").innerHTML = designWebsite.quantity;
document.getElementById("txtDesignWebsitetotal").innerHTML = designWebsite.totalValue;

// Product 2.
document.getElementById("txtguideJavaScriptID").innerHTML = guideJavaScript.id;
document.getElementById("txtguideJavaScriptdescript").innerHTML = guideJavaScript.description;
document.getElementById("txtguideJavaScriptprice").innerHTML = guideJavaScript.price;
document.getElementById("txtguideJavaScriptquantity").innerHTML = guideJavaScript.quantity;
document.getElementById("txtguideJavaScripttotal").innerHTML = guideJavaScript.totalValue;

// Product 3.
document.getElementById("txtguideJSPatternID").innerHTML = guideJSPattern.id;
document.getElementById("txtguideJSPatterndescript").innerHTML = guideJSPattern.description;
document.getElementById("txtguideJSPatternprice").innerHTML = guideJSPattern.price;
document.getElementById("txtguideJSPatternquantity").innerHTML = guideJSPattern.quantity;
document.getElementById("txtguideJSPatterntotal").innerHTML = guideJSPattern.totalValue;

// Product 4.
document.getElementById("txtguideNodeID").innerHTML = guideNode.id;
document.getElementById("txtguideNodedescript").innerHTML = guideNode.description;
document.getElementById("txtguideNodeprice").innerHTML = guideNode.price;
document.getElementById("txtguideNodequantity").innerHTML = guideNode.quantity;
document.getElementById("txtguideNodetotal").innerHTML = guideNode.totalValue;

// Product 5.
document.getElementById("txtguideMongoID").innerHTML = guideMongo.id;
document.getElementById("txtguideMongodescript").innerHTML = guideMongo.description;
document.getElementById("txtguideMongoprice").innerHTML = guideMongo.price;
document.getElementById("txtguideMongoquantity").innerHTML = guideMongo.quantity;
document.getElementById("txtguideMongototal").innerHTML = guideMongo.totalValue;

// Bind properties for services  to HTML table for Javazon services, service 1.
document.getElementById("txtwebDesignID").innerHTML = webDesign.id;
document.getElementById("txtwebDesigndescript").innerHTML = webDesign.description;
document.getElementById("txtwebDesignrate").innerHTML = webDesign.hourlyRate;
document.getElementById("txtwebDesignhours").innerHTML = webDesign.min;

// Service 2.
document.getElementById("txtconsultingDevOpsID").innerHTML = consultingDevOps.id;
document.getElementById("txtconsultingDevOpsdescript").innerHTML = consultingDevOps.description;
document.getElementById("txtconsultingDevOpsrate").innerHTML = consultingDevOps.hourlyRate;
document.getElementById("txtconsultingDevOpshours").innerHTML = consultingDevOps.min;

// Service 3. 
document.getElementById("txtdataDesignID").innerHTML = dataDesign.id;
document.getElementById("txtdataDesigndescript").innerHTML = dataDesign.description;
document.getElementById("txtdataDesignrate").innerHTML = dataDesign.hourlyRate;
document.getElementById("txtdataDesignhours").innerHTML = dataDesign.min;

// Bind properties for services  to HTML table for Javazon employees, employee 1.
document.getElementById("txtLudwigID").innerHTML = ludwig.id;
document.getElementById("txtLudwiglastname").innerHTML = ludwig.lastName;
document.getElementById("txtLudwigfirstname").innerHTML = ludwig.firstName;
document.getElementById("txtLudwigsalary").innerHTML = ludwig.salary;

// Employee 2.
document.getElementById("txtJohannID").innerHTML = johann.id;
document.getElementById("txtJohannlastname").innerHTML = johann.lastName;
document.getElementById("txtJohannfirstname").innerHTML = johann.firstName;
document.getElementById("txtJohannsalary").innerHTML = johann.salary;

// Employee 3.
document.getElementById("txtWolfgangID").innerHTML = wolfgang.id;
document.getElementById("txtWolfganglastname").innerHTML = wolfgang.lastName;
document.getElementById("txtWolfgangfirstname").innerHTML = wolfgang.firstName;
document.getElementById("txtWolfgangsalary").innerHTML = wolfgang.salary;

// Employee 4. 
document.getElementById("txtJohannesID").innerHTML = johannes.id;
document.getElementById("txtJohanneslastname").innerHTML = johannes.lastName;
document.getElementById("txtJohannesfirstname").innerHTML = johannes.firstName;
document.getElementById("txtJohannessalary").innerHTML = johannes.salary;

// Employee 5.
document.getElementById("txtJosephID").innerHTML = joseph.id;
document.getElementById("txtJosephlastname").innerHTML = joseph.lastName;
document.getElementById("txtJosephfirstname").innerHTML = joseph.firstName;
document.getElementById("txtJosephsalary").innerHTML = joseph.salary;

//display correct table when user makes selection.

document.getElementById("btnDisplayListing").onclick= function () {
    let choice = document.getElementById("listing").value;
    let products = document.getElementById("products");
    let services = document.getElementById("services");
    let employees = document.getElementById("employees")
    let select = document.getElementById("select")
    
   switch (choice) {
    case "products": //when user selects "products," Javazon products data table is displayed.
        products.style.display = "block";
        services.style.display = "none";
        employees.style.display = "none";
        break;
    case "services": //when user selects "services," Javazon services data table is displayed.
        products.style.display = "none";
        services.style.display = "block";
        employees.style.display = "none";
        break;
    case "employees": // when user selects "employees," Javazon employee data table is displayed.
        products.style.display = "none";
        services.style.display = "none";
        employees.style.display = "block";
        break;
    case "select": // when user selects "select" no tables are displayed.
        products.style.display = "none";
        services.style.display = "none";
        employees.style.display = "none";
        break;
    default: //No tables should be displayed.
    document.getElementById("form-javazon-select-result").style.display = "none";
    break;  
    }
}
