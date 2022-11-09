require('@cypress/xpath');
class ProfilePage {

    getUserName() {
        return cy.get("#userName-value")
    }
    elements = {
        bookStoreBtn: () => cy.get("#gotoStore"),
        bookTitle: () => cy.get(".rt-tbody a"),
        profileBtn: () => cy.get("span").contains("Profile"),
        confirmDeleteBookBtn: () => cy.get("#closeSmallModal-ok")
    }

    goToBookStore() {
        this.elements.bookStoreBtn().click({ force: true })
    }

    goToProfile() {
        this.elements.profileBtn().click({ force: true })
    }

    deleteBookAdded(titleBook) {
        cy.xpath("//a[text()='" + titleBook + "']/ancestor::div[@class='rt-tr-group']//span[@id='delete-record-undefined']").click({ force: true })
        this.elements.confirmDeleteBookBtn().click({ force: true })
    }
}
export default ProfilePage