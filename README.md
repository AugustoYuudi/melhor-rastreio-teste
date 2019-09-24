# Coding interview para frontend na Melhor Envio


## Telas propostas
![Homepage Mobile](https://github.com/AugustoYuudi/Melhor-Rastreio/blob/develop/src/assets/img/Design%20Original/Melhor%20Rastreio%20Mobile.jpg)
![Homepage Desktop](https://github.com/AugustoYuudi/Melhor-Rastreio/blob/develop/src/assets/img/Design%20Original/Melhor%20Rastreio%20Desktop%201.jpg)
![Rastreio Desktop](https://github.com/AugustoYuudi/Melhor-Rastreio/blob/develop/src/assets/img/Design%20Original/Melhor%20Rastreio%20Desktop%202.jpg)


## Detalhes da proposta

Foi estipulado um prazo de 1 semana para realização do projeto. No escopo do projeto continha:

    1. Tela com versão desktop e mobile
    2. Tela com dados provindos de requisições a API
    3. Uso obrigatório de Vue.JS e Stylus


## Detalhes da implementacao

    * A base do projeto foi criado com Vue CLI
    * Configuração adicinal (vue.config.js) na estrutura do Vue para globalizar alguns arquivos Stylus (reset, cores, fontes, mixins)
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