describe('login', () => {
  it('teste meu site', () => {
    cy.visit('https://portfolio-neri.vercel.app/').wait(2000);
    cy.get('.eu').click().wait(2000);
    cy.get('.certificados').click().wait(4000);
    cy.get('.eu').click().wait(2000);
    cy.get('.atividade').click().wait(2000);
    cy.get('.eu').click().wait(2000);
    cy.get('.projetos').click().wait(2000);
    cy.get('.eu').click();
    cy.end(); // ou cy.finish(); para encerrar o teste
  });
});
