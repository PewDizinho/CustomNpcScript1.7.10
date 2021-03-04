
var mensagem = "Hey " + player.getName() + " Olá! Me chamo " + npc.getName() + ", ";

if (world.isRaining()) {
    mensagem += "está chovendo muito, não? ";
} else {
    mensagem += "que bom que não está mais chovendo, ";
}
if (world.isDay()) {
    mensagem += "Tenha um bom dia!";
} else {
    mensagem += "Tenha uma boa noite!";
}

npc.say(mensagem);
