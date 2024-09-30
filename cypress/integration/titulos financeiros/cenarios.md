Funcionalidade: Títulos Financeiros

Cenário: Verificar a exibição correta dos tipos de títulos
Dado que eu esteja logado como um usuário com títulos de diferentes tipos (Vencidos, A vencer, Pagos)
Quando eu acessar a página de títulos financeiros
Então o sistema deve exibir separadamente as seções de títulos Vencidos, A vencer e Pagos

Cenário: Filtrar títulos por tipo
Dado que eu esteja logado como um usuário com diversos títulos
Quando eu selecionar o filtro "A vencer"
Então o sistema deve exibir apenas os títulos com a data de vencimento futura

Cenário: Receber alertas sobre vencimento de títulos
Dado que eu tenha um título com vencimento em 7 dias
Quando o sistema verificar as datas de vencimento dos títulos
Então o sistema deve enviar um alerta por e-mail ou notificação informando sobre o vencimento do título