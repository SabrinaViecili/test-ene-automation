Funcionalidade: Módulo de Atividades

Cenário: Atividades visíveis no dashboard
Dado que estou logado no sistema
E estou na tela principal
Quando eu acesso o módulo de "Atividades"
Então devo visualizar as seguintes informações no painel de atividades:
| Total         | 25  |
| Em atraso     | 1   |
| Em andamento  | 0   |
| Previstas     | 3   |
| Concluídas    | 21  |

Cenário: Exibir atividades em atraso
Dado que estou logado no sistema
E estou na tela principal do CRM
Quando eu filtro as atividades para visualizar as "Em atraso"
Então devo ver a seguinte atividade:
| Atividade                               | Responsável   | Status       |
| Ligação de agendamento da reunião       | Erica Collins | Atrasada por 4 dias |

Cenário: Exibir atividades previstas
Dado que estou logado no sistema
E estou na tela principal
Quando eu filtro as atividades para visualizar as "Previstas"
Então devo ver as seguintes atividades:
| Atividade               | Responsável      | Data       |
| Reunião orçamento        | Abigail Fisher   | Hoje às 15h |
| Email documentação       | Jeffery King     | Amanhã às 09:45 |
| Almoço corporativo       | Lawrence Kelly   | Amanhã às 13h |

Cenário: Exibir atividades concluídas
Dado que estou logado no sistema
E estou na tela principal
Quando eu filtro as atividades para visualizar as "Concluídas"
Então devo ver as seguintes atividades:
| Atividade                          | Responsável     | Data                    |
| Apresentação feira agrícola        | Caroline Diaz   | Segunda-feira (17/09/2018) às 08h |
| Email orçamento                    | Arthur Clark    | Terça-feira (18/09/2018) às 13h   |
| Ligação contrato                   | Dylan Watson    | Quarta-feira (19/09/2018) às 13h  |

Cenário: Buscar por uma atividade
Dado que estou no modulo de atividades
Quando digito "<termo de busca>" no campo de busca e pressiono Enter
Então a lista de resultados deve exibir apenas os registros que contenham "<termo de busca>" no título

Exemplos:
| termo de busca |
| Atividades Previstas    |
| Atividades em atraso    |
| Atividades em andamento |
| Atividades em concluídas|
| Atividades previstas    |

Cenário: Adicionar uma nova atividade
Dado que eu esteja no módulo de atividades
Quando eu clicar em "Adicionar atividade", preenchendo os campos obrigatórios
E salvar a atividade
Então a nova atividade deve ser adicionada à lista

Cenário: Sincronizar atividades com o calendário
Dado que eu tenha um calendário externo
Quando eu sincronizar minhas atividades
Então as atividades devem ser adicionadas ao meu calendário