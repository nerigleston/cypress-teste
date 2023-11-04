describe('Teste de API', () => {
  it('Deve fazer uma chamada GET à API', () => {
    cy.request('GET', 'https://dog.ceo/api/breeds/list/all')
      .then((response) => {
        expect(response.status).to.eq(200); // Verifica o código de status
        expect(response.body).to.not.be.null; // Verifica se a resposta não é nula
        expect(response.body).to.not.be.undefined; // Verifica se a resposta não é indefinida
        // Aqui você pode realizar outras asserções no conteúdo da resposta, se necessário
      });
  });
});

