# Teste de admissao para a Melhor Envio como frontend


## Telas originais requisitados
<iframe style="border: none;" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FDCAD1wT83kF8wfj7UUaTilZn%2FMelhor-Rastreio%3Fnode-id%3D0%253A1" allowfullscreen></iframe>


## Detalhes da proposta

Foi estipulado um prazo de 1 semana para realização do projeto. No escopo do projeto continha:

    1. Tela com versão desktop e mobile
    2. Tela com dados provindos de requisições a API
    3. Uso obrigatório de Vue.JS e Stylus


## Detalhes da implementacao

    * A base do projeto foi criado com Vue CLI
    * Foi adicionado uma configuração adicinal (vue.config.js) à estrutura do Vue para globalizar alguns arquivos Stylus de uso geral (reset, cores, fontes, mixins)
    * Foi utilizado Vue Router para manusear as 2 diferentes telas
    * Foi utilizado Vuex para controle das funções de requisições HTTP
    * Foi utilizado Rupture.css para controle das media queries


## Rodando o projeto
```
npm install

npm run serve
```

Após compilar, o projeto estará rodando em localhost:8080 com browsersync.

Na rota raíz 'localhost:8080/' temos a primeira tela.

Na rota 'localhost:8080/rastreio-produto' temos a segunda tela.


## Problemas e bugs conhecidos

    * Uso incorreto da escrita BEM css (descoberto após feedback)
    * Falta de um detalhe visual na tela mobile
    * A lógica da linha do tempo na página de rastreio está errada 
    * Não foi tratado responsividade na página de rastreio


## Horas gastas

Aproximadamente 2 horas por dia durante 6 dias (13, 14, 15, 16, 17 e 19 de Julho).