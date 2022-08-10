/// <reference types="cypress" />
//fungsi diatas adalah untuk memunculkan auto-complete dari cypressnya

describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        //untuk membuka website yang akan ditest(Visit a page)
        cy.visit('https://example.cypress.io')


        //permintaan untuk mencari sebuah elemen(Query for an element)
        cy.get('h1').contains('Kitchen Sink')

        //perintah untuk mengklik element(Click an element)
        cy.contains('get').click()
        
        //membuat pernyataan bahwa sudah memasuki halaman yang benar(Make an assertion)
        cy.url().should('include', '/commands/querying')

        //melakukan input pada kolom nama,email dan password
        cy.get('#inputName')
            .type('Putra')
            
        cy.get('#inputEmail')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')

        cy.get('#inputPassword')
            .type('password123')
            .should('have.value', 'password123')
    });

});