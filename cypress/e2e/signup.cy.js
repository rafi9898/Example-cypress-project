/// <reference types="cypress" />

describe("Signup Test", () => {
    before("Open website", () => {
        cy.visit("https://parabank.parasoft.com/")
    })

    it("Click on register label", () => {
        cy.get("a").contains("Register").click();
        cy.url().should("contain", "register.htm")
    })
})