/// <reference types = "cypress"/>

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import BookDetailsPage from "../../support/PageObjects/BookDetailsPage";
import BookStorePage from "../../support/PageObjects/BookStorePage";
import ProfilePage from "../../support/PageObjects/ProfilePage";

const bookStorePage = new BookStorePage()
const profilePage = new ProfilePage()
const bookDetailsPage = new BookDetailsPage()
const bookAddedSuccessfully = "Book added to your collection."

Given("the user is on book store page", () => {
    profilePage.goToBookStore()
    bookStorePage.elements.bookStoreTitle().should("have.text", "Book Store")
})

When("he adds a book to his collection", () => {
    bookStorePage.elements.bookTitle().first().invoke('text').as("bookToSelect")
    bookStorePage.selectFirstBook()
    cy.get("@bookToSelect").then((textValue) => {
        bookDetailsPage.elements.bookTitle().should("have.text", textValue)
    })
    bookDetailsPage.addBookToMyCollection()
    //bookDetailsPage.validateAlertMessage(bookAddedSuccessfully)
})

Then("he should see that book in his collection", () => {
    profilePage.goToProfile()
    cy.get("@bookToSelect").then((textValue)=>{
        profilePage.elements.bookTitle().should("contain.text",textValue)
        profilePage.deleteBookAdded(textValue)
        profilePage.elements.bookTitle().should("not.contain.text",textValue)
    }) 
})