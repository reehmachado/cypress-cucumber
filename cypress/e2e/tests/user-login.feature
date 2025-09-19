Feature: Login de usuário
Como um usuário cadastrado no sistema
Eu quero fazer login na aplicação
Para acessar minhas funcionalidades

Scenario: Autenticação de usuário com sucesso
    Given eu estou na página de login da aplicação
    And eu preencho o meu login de acesso "standard_user"
    And eu preencho a minha senha de acesso "secret_sauce"
    When eu solicito o acesso ao sistema
    Then eu devo ser autenticado com sucesso

Scenario Outline: Tentativa de login com credenciais inválidas
    Given eu estou na página de login da aplicação
    And eu preencho o meu login de acesso <login>
    And eu preencho a minha senha de acesso <senha>
    When eu solicito o acesso ao sistema
    Then eu devo ver uma mensagem de erro informando <mensagem_erro>
    Examples:
    | login | senha |mensagem_erro |
    | "standard_user" | "error_pass" | "Username and password do not match any user in this service" |
    | "locked_out_user" | "secret_sauce" | "Sorry, this user has been locked out" |