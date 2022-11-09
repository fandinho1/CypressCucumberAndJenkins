class BookDetailsPage{

    elements = {
        bookTitle : ()=> cy.get("#title-wrapper #userName-value"),
        addBookToCollectionBtn: ()=> cy.get(".text-right #addNewRecordButton")
    }

    addBookToMyCollection(){
        this.elements.addBookToCollectionBtn().click({force:true})
    }

    validateAlertMessage(messageExpected){
        cy.on("window:alert",(alert)=>{
            expect(messageExpected).to.equal(alert)
        })
    }
}
export default BookDetailsPage