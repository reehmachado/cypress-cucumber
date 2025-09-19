import 'cypress-xpath';
import {
    Given,
    And,
    When,
    Then,
} from 'cypress-cucumber-preprocessor/steps';

Given('eu estou na página de login da aplicação', () => {
cy.visit('https://www.saucedemo.com/');
});
And('eu preencho o meu login de acesso {string}', (login) => {
cy.get('#user-name').type(login);
});
And('eu preencho a minha senha de acesso {string}', (senha) => {
cy.get('#password').type(senha);
});
When('eu solicito o acesso ao sistema', () => {
cy.get('#login-button').click();
});
Then('eu devo ser autenticado com sucesso', () => {
cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
cy.screenshot('Autenticação de usuário com sucesso',
{ overwrite: true });
});
Then('eu devo ver uma mensagem de erro informando {string}',
(mensagem_erro) => {
cy.xpath('//*[@id="login_button_container"]/div/form/div[3]/h3')
.should('contain', mensagem_erro);
cy.screenshot('Tentativa de login com credenciais inválidas: '
+ mensagem_erro,
{ overwrite: true });
});
