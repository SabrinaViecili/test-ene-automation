Funcionalidade: Vendas

Cenário: Gráfico de vendas visível
Dado que estou logado no sistema
E estou na tela principal
Quando eu acesso o módulo de "Vendas"
Então deve ser exibido um espaço para adicionar o gráfico de vendas

Cenário: Gráfico de vendas adicionado com sucesso
Dado que estou na tela do módulo "Vendas"
Quando eu adiciono um gráfico de vendas
Então o gráfico deve ser exibido corretamente no módulo de Vendas

Cenário: Verificar a configuração do gráfico
Dado que eu esteja visualizando o gráfico de vendas
Quando eu verifico as configurações do gráfico
Então as configurações do gráfico devem estar corretas e os dados a serem exibidos devem estar definidos corretamente