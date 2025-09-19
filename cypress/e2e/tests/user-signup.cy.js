import {
Given, And, When, Then
} from 'cypress-cucumber-preprocessor/steps';
import { faker } from '@faker-js/faker';
import 'cypress-xpath';

Given('eu estou na página de autenticação da aplicação', () => {
    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');
});
And('eu informo meu email para criação da conta', () => {
    cy.get("#email_create").type(faker.internet.email());
});
When('eu solicito a criação da minha conta', () => {
    cy.get('#SubmitCreate').click();
});
Then('eu sou redirecionado para a página de criação de conta', () => {
    cy.url().should('include', 'account-creation');
});
And('eu preencho meus dados pessoais obrigatórios', () => {
    cy.get('#customer_firstname').type(faker.name.firstName());
    cy.get('#customer_lastname').type(faker.name.lastName());
    cy.get('#passwd').type(faker.internet.password());
});
When('eu confirmo a criação da minha conta', () => {
    cy.get('#submitAccount').click();
});
Then('eu devo ver uma mensagem informando que a conta foi criada', () =>
{
    cy.xpath('//*[@id="center_column"]/p[1]')
        .should('contain', 'Your account has been created');
        
    cy.screenshot('Criação de usuário com sucesso',
        { overwrite: true });
});