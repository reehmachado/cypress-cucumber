Feature: Criar usuário
    Como um visitante do sistema
    Eu quero criar uma nova conta de usuário
    Para acessar as funcionalidades da aplicação

Scenario: Criação de usuário com sucesso
    Given eu estou na página de autenticação da aplicação
    And eu informo meu email para criação da conta
    When eu solicito a criação da minha conta
    Then eu sou redirecionado para a página de criação de conta
    And eu preencho meus dados pessoais obrigatórios
    When eu confirmo a criação da minha conta
    Then eu devo ver uma mensagem informando que a conta foi criada