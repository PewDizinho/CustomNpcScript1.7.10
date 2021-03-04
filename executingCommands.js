executeCommand("eae");



  function executeCommand(command){
  try{
    npc.say(player.getName());
  } catch(err){	
   print(err);   
  }
}
