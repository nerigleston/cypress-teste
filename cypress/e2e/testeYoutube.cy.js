describe('Pesquisa no YouTube', () => {
  it('Pesquisar por "Treze PB" e verificar os resultados', () => {
    // Visitar a página inicial do YouTube
    cy.visit('https://youtube.com');

    // Localizar o campo de pesquisa e digitar "Treze PB" nele
    cy.get('input#search').type('Treze PB');

    // Clicar no botão de pesquisa
    cy.get('button#search-icon-legacy').click();

    // Verificar se a página de resultados contém resultados relacionados a "Treze PB"
    cy.get('.ytd-video-renderer').should('exist');

    // Localizar o logo do YouTube na página e clicar para voltar à página inicial
    // Localize o elemento pelo atributo 'id' com o valor "logo-icon" e clique nele
    cy.get('#logo-icon').click();

    // Finalizar o teste
    cy.end();
  });
});