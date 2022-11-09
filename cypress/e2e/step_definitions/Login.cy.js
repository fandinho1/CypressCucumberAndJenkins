/// <reference types="cypress"/>

const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")
const { default: LoginPage } = require("../../support/PageObjects/LoginPage")
const { default: ProfilePage } = require("../../support/PageObjects/ProfilePage")

/*
import LoginPage from "../../support/PageObjects/LoginPage"
import ProfilePage from "../../support/PageObjects/ProfilePage"

describe("Login test suite",()=>{

    before(()=>{
        cy.fixture('testData').then(function(data){
            globalThis.data=data;
        })
    })

    const loginPage = new LoginPage()
    const profilePage = new ProfilePage()

    it ("Login successfully compelted test",()=>{
        loginPage.login(data.userName,data.password)
        profilePage.getUserName().should("have.text",data.userName)
    })
})*/

const loginPage = new LoginPage()
const profilePage = new ProfilePage()
let userName;

Given("the user is on the login page", () => {
    cy.visit("/")
})
When("he enter his credentials", (table) => {
    table.hashes().forEach((row) => {
        userName= row.userName
        loginPage.login(row.userName,row.password)
    });    
})
Then("he should be successfully logged in", () => {
    profilePage.getUserName().should("have.text",userName)
})