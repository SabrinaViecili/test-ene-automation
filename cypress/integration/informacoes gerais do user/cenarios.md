Funcionalidade: Informações Gerais do Usuário

Cenário: Verificar exibição correta do nome e cargo
Dado que esteja logado como "João da Silva" com o status “Ativo”
Quando acessar a página inicial
Então o nome completo exibido deve ser "João da Silva"
E a situação exibida deve ser "Ativo"

Cenário: Editar o telefone e verificar atualização
Dado que esteja logado como "Maria Souza"
Quando editar o número de telefone para "(11) 98765-4321"
E salvar as alterações
Então o número de telefone exibido deve ser "(11) 98765-4321"

Cenário: Verificar consistência entre informações
Dado que eu esteja logado como um usuário com a atividade "Agendar reunião com cliente X" marcada como "Em andamento"
Quando eu acessar a página inicial
Então a atividade "Agendar reunião com cliente X" deve ser exibida no bloco de atividades com o status "Em andamento"

Cenário: Verificar comportamento ao tentar excluir o nome do usuário
Dado que eu esteja logado como "Pedro Santos"
Quando eu tentar excluir o campo "Nome"
Então o sistema deve exibir uma mensagem de erro indicando que o campo é obrigatório

Cenário: Verificar comportamento ao tentar acessar informações de outro usuário
Dado que eu esteja logado como "Ana Silva"
Quando eu tentar acessar as informações de "João Silva"
Então o sistema deve exibir uma mensagem de erro ou redirecionar para a minha própria página

Funcionalidade: Módulo Local

Cenário: Verificar exibição da localização no mapa
Dado que esteja logado como um usuário com a localização "São Paulo, SP"
Quando acessar a página inicial
Então o marcador no mapa deve indicar a localização "São Paulo, SP"