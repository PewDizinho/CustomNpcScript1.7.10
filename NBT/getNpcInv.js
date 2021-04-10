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
        dropChance: {
            getChance: function getChance() { return tags.func_150295_c("DropChance", 10).func_150305_b(id).func_74762_e("Integer"); },
            setChance: function setChance(quantidade) {
                tags.func_150295_c("DropChance", 10).func_150305_b(id).func_74768_a("Integer", quantidade);
                npc.getMCEntity().func_70020_e(tags);
                npc.setName(npc.getName());
            }
        },

        getCount: function getCount() { return tags.func_150295_c("NpcInv", 10).func_150305_b(id).func_74771_c("Count"); },
        getSlot: function getSlot() { return tags.func_150295_c("NpcInv", 10).func_150305_b(id).func_74771_c("Slot"); },
        getDamage: function getDamage() { return tags.func_150295_c("NpcInv", 10).func_150305_b(id).func_74765_d("Damage"); },
        getId: function getId() { return tags.func_150295_c("NpcInv", 10).func_150305_b(id).func_74779_i("id"); },
    }

    return handler;
}
