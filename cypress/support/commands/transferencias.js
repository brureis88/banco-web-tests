Cypress.Commands.add('realizarTransferencia', (contaOriigem, contaDestino, valor) => {
    cy.selecionarOpcaoNaComboBox('conta-origem', contaOriigem)
    cy.selecionarOpcaoNaComboBox('conta-destino', contaDestino)
    cy.get('#valor').click().type(valor)
    cy.contains('button', 'Transferir').click()
})