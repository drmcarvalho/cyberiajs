# Cyberiajs

Blog feito com [Teeny.js](https://github.com/inphinit/teeny.js/) e banco de dados sqlite com visual inspirado no anime Serial Experiments Lain. Esta aplicação de blog permite cadastrar e gegenciar postagens, e criar posts usando HTML, JS e CSS do seu jeito xD! Cyberiablog usa apenas Vanilla JS e o Teeny.js como sistema de rotas, sendo o mais [suckless](https://suckless.org/philosophy/) possivel.

# Instruções para executar o projeto

Clone o repositorio para sua maquina, em seguida instale os pacotes executando o comando:
```
npm install
```

Apos instalar os pacotes, inicia a aplicação:
```
node index.js
```

Você também pode especificar uma chave de acesso setando a variavel de ambiente `CHAVE_ACESSO`, segue o comando:
```
CHAVE_ACESSO=minhachave123 node index.js
```

Esta chave de acesso vai permitir que você crie e apague posts. Você pode consultar o arquivo `routes.js` para saber quais rotas usa a chave de acesso.
