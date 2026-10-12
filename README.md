# Cyberiajs

Blog feito com [Teeny.js](https://github.com/inphinit/teeny.js/) e banco de dados sqlite com visual inspirado no anime Serial Experiments Lain. Esta aplicação de blog permite cadastrar e gegenciar postagens, e criar posts usando HTML, JS e CSS do seu jeito xD! Cyberiajs usa apenas Vanilla JS e o Teeny.js como sistema de rotas, é um site estático sendo o mais [suckless](https://suckless.org/philosophy/) possivel.

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

# Como usar

Para cadastrar um blog precisamos informar o conteúdo e o título e efetuar uma requisição para o endpoint `/cadastrar_post/{chave}` seguida da chave. Abaixo segue um exemplo de requisição:
```http
POST /cadastrar_post/minhachave123 HTTP/1.1
Content-Type: application/x-www-form-urlencoded
User-Agent: Insomnia/2023.5.7
Host: localhost:3000
Content-Length: 88

titulo=Teste%20de%20cadastro&conteudo=%3Cp%3ETeste%20de%20cadastro%20conteudo.%3C%2Fp%3E
```

E para excluir um determinado post precisamos efetuar uma requisição para o endpoint `deletar_post/{minhachave}-{id do post}` informa a chave e id no formado `chave-21id`, veja abaixo um exemplo:
```http
POST /deletar_post/minhachave123-17 HTTP/1.1
User-Agent: Insomnia/2023.5.7
Host: localhost:3000
```