/// <reference types="cypress" />
//fungsi diatas adalah untuk memunculkan auto-complete dari cypressnya

describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        //untuk membuka website yang akan ditest(Visit a page)
        cy.visit('https://example.cypress.io')
        
        cy.pause()

        //permintaan untuk mencari sebuah elemen(Query for an element)
        cy.get('h1').contains('Kitchen Sink')

        //perintah untuk mengklik element(Click an element)
        cy.contains('type').click()
        
        //membuat pernyataan bahwa sudah memasuki halaman yang benar(Make an assertion)
        cy.url().should('include', '/commands/actions')

         //melakukan input pada kolom email, password, fullname,descripion adn couponCode
        cy.get('#email1').clear()
        cy.get('#email1')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')

        cy.get('#password1').clear()
        cy.get('#password1')
            .type('password123')
            .should('have.value', 'password123')

        cy.get('#fullName1').type('Mulkhi Putra Lesmana')
        cy.get('#description').type("this my first time using Cypress and it's so pretty good I like it")
        cy.get('#couponCode1').type('666999')
        cy.get('button').contains('Submit').click()


        
    });

});
