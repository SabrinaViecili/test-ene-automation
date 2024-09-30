Funcionalidade: Limite de Crédito

Cenário: Verificar exibição correta do limite de crédito total
Dado que eu esteja logado como um usuário com limite de crédito de R$ 10.000,00
Quando eu acessar a página inicial
Então o limite de crédito total exibido deve ser R$ 10.000,00

Cenário: Verificar cálculo do valor Disponível
Dado que eu tenha realizado compras no valor de R$ 5.000,00
Quando eu acessar a página inicial
Então o valor disponível do limite de crédito deve ser R$ 5.000,00