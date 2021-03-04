# Executando comandos em todas as hooks

- Em cada hook, o player é chamado de forma diferente, as vezes por `event.getSource()`, `entity`, `event.getTarget()` e as vezes como `player`, então fiz um código aonde deixa mais prático executar comandos usando o nick do player em qualquer hook!


## Hooks que não tem a referência `iPlayer`

### Algumas hooks, como `init` e `update` não tem nenhuma referência para iPlayer, pois não iriam saber diferenciar, por exemplo:
- Hooks como `interact`, denominam o iPlayer, como a entidade que interagiu com o npc e efetuou o evento, porém em update, não existe nenhuma intervenção do player no evento, então é impossível para a maquina entender de qual player você está se referindo.

#### Resolução 
 - Hooks como `update` e `init`, coletam o primeiro player que estiver dentro de um raio de 5 blocos, e então executa o comando nesse player. Caso não tenha nenhum player nessa área, o código irá emitir um aviso no console do NPC

## Exemplo de usagem
 - Depois de ter o arquivo [executingCommands.js](https://github.com/PewDizinho/CustomNpcScript1.7.10/blob/main/commandos/executingCommands.js) no loadScripts, ou no código em si, você poderá fazer


```js
_executeCommand("gamemode 0 {player}");
```
