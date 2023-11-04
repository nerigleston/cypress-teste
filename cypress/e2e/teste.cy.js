describe('login', () => {
  it('user should be able to log in', () => {
    // A descrição do teste começa aqui
    cy.visit('https://bb.cruzeirodosulvirtual.com.br/webapps/login/') // Visite a página de login

    cy.get('#agree_button').click() // Clique no botão "agree_button" (é importante entender o propósito deste botão)

    cy.get('input#user_id').type('6735487569'); // Insira 'rgm' no campo de entrada de usuário
    cy.get('input#password').type('15068'); // Insira 'senha' no campo de entrada de senha

    cy.get('input#entry-login').click(); // Clique no botão de entrada de login

    // Verifique se o botão está visível e interagível
    cy.get('button.standard-button.left-off-canvas-toggle.menu-toggle[ng-attr-tabindex]')
      .should('be.visible') // Verifique se o botão é visível
      .should('not.have.attr', 'disabled'); // Verifique se o botão não possui o atributo "disabled"

    // Em seguida, clique no botão
    cy.get('button.standard-button.left-off-canvas-toggle.menu-toggle[ng-attr-tabindex]').click();
  })
})
