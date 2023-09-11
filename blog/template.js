module.exports.post_html = `
    <article>               
        <h1>@titulo</h1>
        <p style="font-size: 1.3vh;">Publicado em <time datetime="@dataHora">@dataHora</time></p>
        @conteudo        
    </article>
`;
module.exports.lista_post_html = ` teste
`;
module.exports.base_html_cyberia = `
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="utf-8">
        
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no">
        <meta name="description" content="Cyberiablog um lugar onde descrevo meus pensamentos">
        
        <title>Cyberiablog</title>
        <!--<link rel="icon" type="image/x-icon" href="favicon.ico" /> -->
        <style type="text/css">
            body {
                background-color: #111111;

                min-height: 100vh; 
                margin: 0; 
                
                display: grid;
                grid-template-rows: auto 1fr auto;
            }

            header{ 
                min-height:50px;                
            }

            footer{ 
                min-height:50px;                 
                text-align: center;
                font-size: 2vmin;
            }

            * {
                font-family: monospace;
                background: black;
                background: #111111;
                /*color: limegreen; */
                color: #d2738a;                
                
            }

            h1 {
                font-size: 2.1vw;                
                padding-left: 1%;

            }

            h2 {
                font-size: 1.5vh;
                padding-left: 1.0em;
                padding-left: 1%;                
            }

            p {
                text-align: justify;
                font-size: 2vmin;
                line-height: 1.7em;
                padding-left: 1%;
                padding-right: 1%;
            }            

            li {
                font-size: 2vmin;
            }                 
            
            #logo {
                font-size: 6vmin;                
            }
        </style>
    </head>
    <body>
        <header>
            <div id="logo">
                <span style="padding-left: 0.6%;">Cyberiablog</span>                
            </div>       
            <div>
                <span style="padding-left: 0.8%;">navi@COMPUTER<span style="color: white;">:</span><span style="color: blue;">~</span><span style="color: white;">$</span> <span style="color: white;">./post @identificador</span></span>
            </div>     
        </header>                       
            @template
        <aside>
            <!-- tags --> 
        </aside>
        <footer id="footer">Desenvolvido por ~Red~ | Feito com <a href="https://github.com/inphinit/teeny.js/" target="_blank">Teeny.js</a> ♥️</footer>
    </body>
</html>
`;