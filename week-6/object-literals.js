/*
============================================
; Title:  object-literals.js
; Author: Hannah Del Real
; Date:   6 February 2023
; Description: JavaScript for delreal-in-n-out-books.html, demonstrating use of object literals and binding values to display in html tables
;===========================================
*/
// Object literals for top 3 favorite books.
let book1 = {
        isbn: "0439139600",
        title: "Harry Potter and the Goblet of Fire",
        pages: "636"
}
let book2 = {
        isbn: "0141439518",
        title: "Pride and Prejudice",
        pages: "254"
}
let book3 = {
        isbn: "0743273565",
        title: "The Great Gatsby",
        pages: "208"
}
// Object literals for top 3 favorite authors
let author1 = {
        name: "J.K. Rowling",
        genre: "Fantasy, children's literature"
}
    let author2 = {
        name: " Jane Austen",
        genre: "Romantic literature"
}
let author3 = {
        name: "F. Scott Fitzgerald",
        genre: "Fiction, tragedy"
}

// Bind object literals for books  to HTML table for Top 3 Favorite Books.
    document.getElementById("txtHarryPotterISBN").innerHTML = book1.isbn;
    document.getElementById("txtPridePrejudiceISBN").innerHTML = book2.isbn;
    document.getElementById("txtGreatGatsbyISBN").innerHTML = book3.isbn;
    document.getElementById("txtHarryPottertitle").innerHTML = book1.title;
    document.getElementById("txtPridePrejudicetitle").innerHTML = book2.title;
    document.getElementById("txtGreatGatsbytitle").innerHTML = book3.title;
    document.getElementById("txtHarryPotterpages").innerHTML = book1.pages;
    document.getElementById("txtPridePrejudicepages").innerHTML = book2.pages;
    document.getElementById("txtGreatGatsbypages").innerHTML = book3.pages;
    // Bind object literals for authors  to HTML table for Top 3 Favorite Authors.
    document.getElementById("txtRowlingName").innerHTML = author1.name;
    document.getElementById("txtAustenName").innerHTML = author2.name;
    document.getElementById("txtFitzgeraldName").innerHTML = author3.name;
    document.getElementById("txtRowlingGenre").innerHTML = author1.genre;
    document.getElementById("txtAustenGenre").innerHTML = author2.genre;
    document.getElementById("txtFitzgeraldGenre").innerHTML = author3.genre;


//display correct table when user makes selection.

document.getElementById("btnDisplayListing").onclick= function () {
    let choice = document.getElementById("favoriteList").value;
    let books = document.getElementById("favorite-books");
    let authors = document.getElementById("favorite-authors");
    
    if (choice === "books") {
        books.style.display = "block";
        authors.style.display = "none"
    } else if (choice === "authors") {
        books.style.display = "none";
        authors.style.display = "block";
    } else if (choice === "select") {
        books.style.display = "none";
        authors.style.display = "none";
    }

}