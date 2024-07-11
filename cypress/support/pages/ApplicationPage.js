export class ApplicationPage {
    
    navigate() {
        cy.visit('/')

        cy.get('.sp-cc-text').then(($cookie) => {
            if ($cookie.is(':visible')) {
                cy.get('#sp-cc-rejectall-link').click()
            }
        }) 
        
    }

    searchProduct (product) {
        cy.get('#twotabsearchtextbox').type(product+'{enter}')
    }
    
}

export const applicationPage = new ApplicationPage();
