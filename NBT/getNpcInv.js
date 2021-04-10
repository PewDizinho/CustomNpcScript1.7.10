/**
* @author PewDizinho
*/


function getNpcInv(id) {
    var NBTTagCompound = Java.type('net.minecraft.nbt.NBTTagCompound');
    var tags = new NBTTagCompound();
    npc.getMCEntity().func_70109_d(tags);
    var handler = {
        setCount: function setCount(quantidade) {
            tags.func_150295_c("NpcInv", 10).func_150305_b(id).func_74774_a("Count", quantidade);
            npc.getMCEntity().func_70020_e(tags);
            npc.setName(npc.getName());
        },
        setSlot: function setSlot(quantidade) {
            tags.func_150295_c("NpcInv", 10).func_150305_b(id).func_74774_a("Slot", quantidade);
            npc.getMCEntity().func_70020_e(tags);
            npc.setName(npc.getName());
        },
        setDamage: function setDamage(quantidade) {
            tags.func_150295_c("NpcInv", 10).func_150305_b(id).func_74777_a("Damage", quantidade),
                npc.getMCEntity().func_70020_e(tags);
            npc.setName(npc.getName());
        },
        setId: function setId(nomeId) {
            tags.func_150295_c("NpcInv", 10).func_150305_b(id).func_74778_a("id", nomeId)
            npc.getMCEntity().func_70020_e(tags);
            npc.setName(npc.getName());
        },

        count: tags.func_150295_c("NpcInv", 10).func_150305_b(id).func_74771_c("Count"),
        slot: tags.func_150295_c("NpcInv", 10).func_150305_b(id).func_74771_c("Slot"),
        damage: tags.func_150295_c("NpcInv", 10).func_150305_b(id).func_74765_d("Damage"),
        id: tags.func_150295_c("NpcInv", 10).func_150305_b(id).func_74779_i("id"),
    }

    return handler;
}

