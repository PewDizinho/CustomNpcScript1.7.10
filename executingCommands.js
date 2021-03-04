exeCommand("gamemode 0 {player}");



function exeCommand(command) {
    var tag = Java.type('net.minecraft.nbt.NBTTagCompound');
    var tags = new tag();
    npc.getMCEntity().func_70109_d(tags);
    var plrs = npc.getSurroundingEntities(5, 1);
    if (counter == undefined) {
        var counter = false;
    }
    for (var i = 0; i < 10; i++) {
        var scriptsList = tags.func_150295_c("ScriptsContainers", 10).func_150305_b(i);
        npc.say(scriptsList.func_74762_e("Type"));
        switch (scriptsList.func_74762_e("Type")) {
            case 0:
                counter = true;
                if (plrs.length > 0) {
                    npc.executeCommand(command.replace("{player}", plrs[0].getName()));
                } else {
                    print(err("Não consigo localizar o player!", "Init"));
                }
                break;

            case 1:
                counter = true;
                if (plrs.length > 0) {
                    npc.executeCommand(command.replace("{player}", plrs[0].getName()));
                } else {
                    print(err("Não consigo localizar o player!", "Update"));
                }
                break;

            case 2:
                counter = true;
                npc.executeCommand(command.replace("{player}", player.getName()));
                break;

            case 3:
                counter = true;
                npc.executeCommand(command.replace("{player}", player.getName()));
                break;

            case 4:
                counter = true;
                if (event.getSource()) {
                    if (event.getSource().typeOf(1)) {
                        npc.executeCommand(command.replace("{player}", event.getSource().getName()));
                    }
                }
                break;

            case 5:
                counter = true;
                if (event.getSource()) {
                    if (event.getSource().typeOf(1)) {
                        npc.executeCommand(command.replace("{player}", event.getSource().getName()));
                    }
                }
                break;

            case 6:
                counter = true;
                if (event.getTarget()) {
                    if (event.getTarget().typeOf(1)) {
                        npc.executeCommand(command.replace("{player}", event.getTarget().getName()));
                    }
                }
                break;

            case 7:
                counter = true;
                if (event.getTarget()) {
                    if (event.getTarget().typeOf(1)) {
                        npc.executeCommand(command.replace("{player}", event.getTarget().getName()));
                    }
                }
                break;

            case 8:
                counter = true;
                if (entity) {
                    if (entity.typeOf(1)) {
                        npc.executeCommand(command.replace("{player}", entity.getName()));
                    }
                }
                break;

            case 9:
                counter = true;
                if (plrs.length > 0) {
                    npc.executeCommand(command.replace("{player}", plrs[0].getName()));
                } else {
                    print(err("Não consigo localizar o player!", "Kills"));
                }
                break;

            case 10:
                counter = true;
                npc.executeCommand(command.replace("{player}", player.getName()));
                break;
        }
        if (counter) {
            break;
        }
    }
}

function err(error, hook) {
    print("--------------------------------------");
    print("Erro localizado na " + hook);
    print("Erro: " + error);
    print("Veja https://github.com/PewDizinho/CustomNpcScript1.7.10/blob/main/executingCommands.js para qualquer dúvida");
    print("--------------------------------------");
}
