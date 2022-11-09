class LoginPage{

    elements = {
        userNameInput : ()=> cy.get("#userName"),
        passwordInput:()=>cy.get("#password"),
        loginBtn:()=>cy.get("#login")
    }
    /*
    getUserNameTxt(){
        return cy.get("#userName")
    }
    getPasswordTxt(){
        return cy.get("#password")
    }
    getLoginBtn(){
        return cy.get("#login")
    }
*/
    login(userName, password){
        this.elements.userNameInput().type(userName)
        this.elements.passwordInput().type(password)
        this.elements.loginBtn().click()
    }
}
export default LoginPage