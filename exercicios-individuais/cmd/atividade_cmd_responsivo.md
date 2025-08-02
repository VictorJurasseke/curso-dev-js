1\.



**Cria a pasta projeto\_responsivo**

mkdir projeto\_responsivo





**Acessa a pasta projeto\_responsivo**

cd projeto\_responsivo





**Cria as subpastas:**

mkdir public

mkdir src

mkdir docs



**Acessa a pasta public**

cd public





**Cria as subpastas dentro de public:**

mkdir html

mkdir css

mkdir js

mkdir media

**Acessa a pasta media**

cd media



**Verifica a pasta atual**

dir



**Acessa a pasta html**

cd ../html



**Cria o arquivo html**

echo Projeto Responsivo > home.html



**Acessa a pasta css**

cd ../css



**Cria o arquivo theme.css**

echo body {margin:0; padding:0; background-color:lightgray;} > theme.css





**Acessa a pasta media**

cd ../media



**Cria as duas subpastas chamada imagens e fontes.**

mkdir imagens

mkdir fontes



**Acessa a pasta css**

cd ../css



**Copia o theme.css e envia para a pasta docs**

copy theme.css copiatheme.css

move copiatheme.css ../../docs

cd ../../docs

rename copiatheme.css theme.css



**Acessa a pasta js**

cd ../public/js



**Cria o arquivo responsivo.js**

echo console.log("Site responsivo pronto!") > responsivo.js



**Cria o arquivo utils.js**

echo console.log("Utilitários carregados!") > utils.js



**Renomeio o arquivo utils.js para helpers.js**

rename utils.js helpers.js



**Acessa a pasta docs**

cd ../../docs



**Apaga o arquivo theme.css de docs**

del theme.css



**Acessa a pasta html**

cd ../public/html

start home.html

