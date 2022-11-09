class BookStorePage {

    elements = {
        bookStoreTitle: () => cy.get(".main-header"),
        bookTitle: () => cy.get(".rt-tbody a")
    }

    selectFirstBook() {
        this.elements.bookTitle().first().click()
    }

    getFirstBookTitle() {
        this.elements.bookTitle().first().then((text) => {
            cy.
            cy.log(text.text().toString())
            //return text.text()
        })
    }
}
export default BookStorePage