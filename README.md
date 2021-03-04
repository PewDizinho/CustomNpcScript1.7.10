# Custom Npc Script 1.7.10

## Instalando
 * [Forge 1.7.10](https://files.minecraftforge.net/maven/net/minecraftforge/forge/1.7.10-10.13.4.1558-1.7.10/forge-1.7.10-10.13.4.1558-1.7.10-installer-win.exe)
 * [CustomNPCs_1.7.10d(29oct17)](https://www.curseforge.com/minecraft/mc-mods/custom-npcs/download/2495406/file) (Última versão da 1.7.10)
 * [Nashorn](https://cdn.discordapp.com/attachments/735273455506948116/735273827038396446/nashorn.jar) (Executador dos scripts em ES5)

 ### Singleplayer
  - Para usar scripts no singleplayer você precisa ter os mods *CustomNPCs 1.7.10* e *Nashorn* na sua pasta de mods
  
 ### Servidor
  - Em um servidor, precisa ter os mods *CustomNPCs 1.7.10* e *Nashorn* na pasta de mods do servidor, players precisam _apenas_ do *CustomNPCs 1.7.10* para entrar


## Requesitos para aprender a fazer scripts
 ### Programação
  - Bem, obviamente, você precisa ter um conheço básico em lógica de programação e de JavaScript (ES5), você pode acessar essa [playlist básica de JavaScript](https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1), e clicar aqui para pegar [referências sobre o ES5](https://www.w3schools.com/js/js_es5.asp)


 ## Começando a criar
 
 ### Abrindo NPC
  - Você já instalou todos os mods necessários, já aprendeu o básico de JavaScript... E agora? Você deve ir até seu mundo/server, e então pegar um item chamado *scripter* (Ou também conhecida como a *pázinha do customNpc*), então você irá clicar no npc em que você deseja adicionar o script, você deverá se deparar com essa tela.
![image](https://user-images.githubusercontent.com/55335712/110036149-5050e580-7d1b-11eb-905e-2b871b43c886.png)
 - Caso esteja tudo preto ao lado de "Language", você não está com o Nashorn em sua aba de mods, então verifique isso!
 - Agora você irá deixar "Enabled: Yes", e então clicar em "Scripts".
 
 ### Criando seu primeiro script!
 - Você está deparado com essa tela![image](https://user-images.githubusercontent.com/55335712/110036322-9e65e900-7d1b-11eb-86bc-86234c432d91.png)
 - Mas o que são essas Hooks?
 
  #### Hooks também conhecida como os eventos, são abas que irão ativar seus scripts em situações diferentes
![image](https://user-images.githubusercontent.com/55335712/110036572-fef52600-7d1b-11eb-858b-5b24e68a5b2f.png)

 - Como a print acima explica, Init irá ser executado toda vez que o npc nascer, for reset, ou modificado, então vamos começar usando essa hook.

 ### Métodos 
 - Como você deve ter aprendido em seus estudos sobre JavaScript, existem métodos, e em Custom Npc script não é diferente! Mas vamos com calma, começaremos com algo simples.
 Primeiro, vamos começar chamando ``npc`` no nosso código
 ![image](https://user-images.githubusercontent.com/55335712/110036765-47acdf00-7d1c-11eb-8360-158bbe5bd5a0.png)
 Agora, temos um [iNpc](http://www.kodevelopment.nl/customnpcs/api/1.7.10/noppes/npcs/scripted/ScriptNpc.html), e podemos executar qualquer método que um iNpc suporta! Como por exemplo, um ``say(String)``
 ![image](https://user-images.githubusercontent.com/55335712/110036906-7925aa80-7d1c-11eb-968d-f9b9db6bfd3a.png)

- Caso você tenha feito tudo certo até aqui, o npc irá falar "Olá mundo", no momento em que você fechar o scripter.
- 
![image](https://user-images.githubusercontent.com/55335712/110037011-978ba600-7d1c-11eb-9f57-0340a8269941.png)


 

## Links 

* [Pew's Cavern](https://customnpcscripts.com/pew)
* [CNPC Scripting Support Discord](https://discord.gg/4a24F2z)
* [CNPC 1.7.10 API](http://www.kodevelopment.nl/customnpcs/api/1.7.10/)
