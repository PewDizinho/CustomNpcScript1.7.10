if (counter == undefined) {
    var counter = 0;
}


if (world.isDay() && counter == 0) {
    npc.say("Está de dia!");
    counter = 1;
} else {
    npc.say("Está de noite!");
    counter = 0;
}

if (world.isRaining()) {
    npc.executeCommand("toggledownfall");
    npc.say("Tirei a chuva!");
}
