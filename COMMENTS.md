
### Decisão de Arquitetura

A arquitetura do projeto foi construída com base na utilização do **Cypress** para automação de testes end-to-end (e2e) e de API. Essa escolha foi motivada pela facilidade de uso e pela robustez do Cypress, que permite realizar testes de interface e integração de maneira eficiente, com uma sintaxe intuitiva e suporte a funcionalidades modernas como testes em modo gráfico e headless. Além disso, o Cypress facilita a simulação de interações do usuário e a verificação de estados da aplicação.

Além disso foi utilizada a estrutura de **helpers**, esses, são scripts de suporte que contêm funções e comandos personalizados para facilitar a escrita de testes. Eles ajudam a manter os testes mais limpos e legíveis, evitando a repetição de código.

A escolha dessa estrutura se deve a alguns fatores. Primeiro, ela proporciona uma organização clara, facilitando a localização de arquivos específicos, especialmente à medida que o número de testes aumenta. Em segundo lugar, a reutilização de código através de helpers e comandos personalizados reduz a duplicação, aumentando a eficiência e simplificando a manutenção.

Além disso, essa estrutura torna mais fácil adicionar novos testes e funcionalidades sem comprometer a organização existente, o que é crucial para projetos em constante evolução. A clareza da estrutura também facilita a colaboração entre diferentes desenvolvedores, permitindo que eles compreendam rapidamente a organização do projeto.

### Bibliotecas de Terceiros Utilizadas

O projeto utilizou as seguintes bibliotecas de terceiros:

- **Cypress**: Ferramenta principal para automação de testes.
- **mochawesome**: Para gerar relatórios de testes mais detalhados.
- **Prettier**: Utilizado para garantir um estilo de codificação consistente em todo o projeto.

### Melhorias Futuras

### Melhorias Futuras

Se eu tivesse mais tempo, algumas melhorias que consideraria implementar incluem:

1. **Cobertura de Testes Aumentada**: Adicionar mais casos de teste, incluindo testes de borda e cenários de erro para cobrir uma maior variedade de situações.
2. **Documentação Mais Detalhada**: Expandir a documentação do projeto para incluir exemplos de testes e melhores práticas para contribuição.
3. **Integração Contínua**: Configurar um pipeline de CI/CD para executar testes automaticamente em cada push para o repositório.
4. **Melhorias de Performance**: Otimizar os testes para reduzir o tempo total de execução, utilizando técnicas como paralelização.

### Requisitos Não Entregues

Os seguintes requisitos, não foram completamente entregues:

- **Documentação de Contribuição**:
Descrição: Criar uma documentação clara sobre como contribuir para o projeto, incluindo estilo de codificação e diretrizes para pull requests.
Motivo: Embora a documentação básica tenha sido escrita, as diretrizes para contribuições detalhadas não foram elaboradas.

- **Geração de Relatórios Detalhados**:
Descrição: Criar relatórios que documentem os resultados dos testes de forma mais estruturada e informativa.
Motivo: A utilização de ferramentas como mochawesome para geração de relatórios foi planejada, mas não foi implementada devido à priorização de funcionalidades principais.

- **Testes de Acessibilidade**: Embora tenha a intenção de implementar, os testes de acessibilidade com a biblioteca **cypress-axe** não foram configurados devido a limitações de tempo.


