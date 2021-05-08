var NBTTagCompound = Java.type('net.minecraft.nbt.NBTTagCompound');
var tags = new NBTTagCompound();
npc.getMCEntity().func_70109_d(tags);
var newNpc = {
    clientNeedsUpdate: function () {
        npc.getMCEntity().func_70020_e(tags);
        npc.setName(npc.getName());
    },
    setAimWhileShooting: function (byte) {
        tags.func_74774_a("AimWhileShooting", int);
        this.clientNeedsUpdate();
    },
    getAimWhileShooting: function () {
        return tags.func_74771_c("AimWhileShooting");
    },

    setAttackInvisible: function (byte) {
        tags.func_74774_a("AttackInvisible", byte);
        this.clientNeedsUpdate();
    },
    getAttackInvisible: function () {
        return tags.func_74771_c("AttackInvisible");
    },

    setAttackOtherFactions: function (byte) {
        tags.func_74774_a("AttackOtherFactions", byte);
        this.clientNeedsUpdate();
    },
    getAttackOtherFactions: function () {
        return tags.func_74771_c("AttackOtherFactions");
    },

    setAvoidsSun: function (byte) {
        tags.func_74774_a("AvoidsSun", byte);
        this.clientNeedsUpdate();
    },
    getAvoidsSun: function (byte) {
        return tags.func_74771_c("AvoidsSun");
    },

    setAvoidsWater: function (byte) {
        tags.func_74774_a("AvoidsWater", byte);
        this.clientNeedsUpdate();
    },
    getAvoidsWater: function () {
        return tags.func_74771_c("AvoidsWater");
    },

    setBurnInSun: function (byte) {
        tags.func_74774_a("BurnInSun", byte);
        this.clientNeedsUpdate();
    },
    getBurnInSun: function () {
        return tags.func_74771_c("BurnInSun");
    },

    setCanDespawn: function (byte) {
        tags.func_74774_a("CanDespawn", byte);
        this.clientNeedsUpdate();
    },
    getCanDespawn: function () {
        return tags.func_74771_c("CanDespawn");
    },

    setCanDrown: function (byte) {
        tags.func_74774_a("CanDown", byte);
        this.clientNeedsUpdate();
    },
    getCanDrown: function () {
        return tags.func_74771_c("CanDrown");
    },

    setCanLeap: function (byte) {
        tags.func_74774_a("CanLeap", byte);
        this.clientNeedsUpdate();
    },
    getCanLeap: function () {
        return tags.func_74771_c("CanLeap");
    },

    setCanPickUpLoot: function (byte) {
        tags.func_74774_a("CanPickUpLoot", byte);
        this.clientNeedsUpdate();
    },
    getCanPickUpLoot: function () {
        return tags.func_74771_c("CanPickUpLoot");
    },

    setCanSprint: function (byte) {
        tags.func_74774_a("CanSprint", byte);
        this.clientNeedsUpdate();
    },
    getCanSprint: function () {
        return tags.func_74771_c("CanSprint");
    },

    setCanSwim: function (byte) {
        tags.func_74774_a("CanSwim", byte);
        this.clientNeedsUpdate();
    },
    getCanSwim: function () {
        return tags.func_74771_c("CanSwim");
    },

    setCustomNameVisible: function (byte) {
        tags.func_74774_a("CustomNameVisible", byte);
        this.clientNeedsUpdate();
    },
    getCustomNameVisible: function () {
        return tags.func_74771_c("CustomNameVisible");
    },

    setDefendFaction: function (byte) {
        tags.func_74774_a("DefendFaction", byte);
        this.clientNeedsUpdate();
    },
    getDefendFaction: function () {
        return tags.func_74771_c("DefendFaction");
    },

    setDirectLOS: function (byte) {
        tags.func_74774_a("DirectLOS", byte);
        this.clientNeedsUpdate();
    },
    getDirectLOS: function () {
        return tags.func_74771_c("DirectLOS");
    },

    setDisablePitch: function (byte) {
        tags.func_74774_a("DisablePitch", byte);
        this.clientNeedsUpdate();
    },
    getDisablePitch: function () {
        return tags.func_74771_c("DisablePitch");
    },

    setHideBodyWhenKilled: function (byte) {
        tags.func_74774_a("HideBodyWhenKilled", byte);
        this.clientNeedsUpdate();
    },
    getHideBodyWhenKilled: function () {
        return tags.func_74771_c("HideBodyWhenKilled");
    },

    setIgnoreCobweb: function (byte) {
        tags.func_74774_a("IgnoreCobweb", byte);
        this.clientNeedsUpdate();
    },
    getIgnoreCobweb: function () {
        return tags.func_74771_c("IgnoreCobweb");
    },

    setImmuneToFire: function (byte) {
        tags.func_74774_a("ImmuneToFire", byte);
        this.clientNeedsUpdate();
    },
    getImmuneToFire: function () {
        return tags.func_74771_c("ImmuneToFire");
    },

    setInvulnerable: function (byte) {
        tags.func_74774_a("Invulnerable", byte);
        this.clientNeedsUpdate();
    },
    getInvulnerable: function () {
        return tags.func_74771_c("Invulnerable");
    },

    setLeashed: function (byte) {
        tags.func_74774_a("Leashed", byte);
        this.clientNeedsUpdate();
    },
    getLeashed: function () {
        return tags.func_74771_c("Leashed");
    },

    setMovingPause: function (byte) {
        tags.func_74774_a("MovingPause", byte);
        this.clientNeedsUpdate();
    },
    getMovingPause: function () {
        return tags.func_74771_c("MovingPause");
    },

    setNoFallDamage: function (byte) {
        tags.func_74774_a("NoFallDamage", byte);
        this.clientNeedsUpdate();
    },
    getNoFallDamage: function () {
        return tags.func_74771_c("NoFallDamage");
    },

    setNoLivingAnimation: function (byte) {
        tags.func_74774_a("NoLivingAnimation", byte);
        this.clientNeedsUpdate();
    },
    getNoLivingAnimation: function () {
        return tags.func_74771_c("NoLivingAnimation");
    },

    setOnGround: function (byte) {
        tags.func_74774_a("OnGround", byte);
        this.clientNeedsUpdate();
    },
    getOnGround: function () {
        return tags.func_74771_c("OnGround");
    },

    setOrderedLines: function (byte) {
        tags.func_74774_a("OrderedLines", byte);
        this.clientNeedsUpdate();
    },
    getOrderedLines: function () {
        return tags.func_74771_c("OrderedLines");
    },

    setPersistenceRequired: function (byte) {
        tags.func_74774_a("PersistenceRequired", byte);
        this.clientNeedsUpdate();
    },
    getPersistenceRequired: function () {
        return tags.func_74771_c("PersistenceRequired");
    },

    setPotionImmune: function (byte) {
        tags.func_74774_a("PotionImmune", byte);
        this.clientNeedsUpdate();
    },
    getPotionImmune: function () {
        return tags.func_74771_c("PotionImmune");
    },

    setReactsToFire: function (byte) {
        tags.func_74774_a("ReactsToFire", byte);
        this.clientNeedsUpdate();
    },
    getReactsToFire: function () {
        return tags.func_74771_c("ReactsToFire");
    },

    setReturnToStart: function (byte) {
        tags.func_74774_a("ReturnToStart", byte);
        this.clientNeedsUpdate();
    },
    getReturnToStart: function () {
        return tags.func_74771_c("ReturnToStart");
    },

    setScriptEnabled: function (byte) {
        tags.func_74774_a("ScriptEnabled", byte);
        this.clientNeedsUpdate();
    },
    getScriptEnabled: function () {
        return tags.func_74771_c("ScriptEnabled");
    },

    setUsingSkinUrl: function (byte) {
        tags.func_74774_a("UsingSkinUrl", byte);
        this.clientNeedsUpdate();
    },
    getUsingSkinUrl: function () {
        return tags.func_74771_c("UsingSkinUrl");
    },

    setnpcInteracting: function (byte) {
        tags.func_74774_a("npcInteracting", byte);
        this.clientNeedsUpdate();
    },
    getnpcInteracting: function () {
        return tags.func_74771_c("npcInteracting");
    },

    setpExplode: function (byte) {
        tags.func_74774_a("pExplode", byte);
        this.clientNeedsUpdate();
    },
    getpExplode: function () {
        return tags.func_74771_c("pExplode");
    },

    setpGlows: function (byte) {
        tags.func_74774_a("pGlows", byte);
        this.clientNeedsUpdate();
    },
    getpGlows: function () {
        return tags.func_74771_c("pGlows");
    },

    setpPhysics: function (byte) {
        tags.func_74774_a("pPhysics", byte);
        this.clientNeedsUpdate();
    },
    getpPhysics: function () {
        return tags.func_74771_c("pPhysics");
    },

    setpRender3D: function (byte) {
        tags.func_74774_a("pRender3D", byte);
        this.clientNeedsUpdate();
    },
    getpRender3D: function () {
        return tags.func_74771_c("pRender3D");
    },

    setpSpin: function (byte) {
        tags.func_74774_a("pSpin", byte);
        this.clientNeedsUpdate();
    },
    getpSpin: function () {
        return tags.func_74771_c("pSpin");
    },

    setpStick: function (byte) {
        tags.func_74774_a("pStick", byte);
        this.clientNeedsUpdate();
    },
    getpStick: function () {
        return tags.func_74771_c("pStick");
    },

    setpXlr8: function (byte) {
        tags.func_74774_a("pXlr8", byte);
        this.clientNeedsUpdate();
    },
    getpXlr8: function () {
        return tags.func_74771_c("pXlr8");
    },

    setstopAndInteract: function (byte) {
        tags.func_74774_a("stopAndInteract", byte);
        this.clientNeedsUpdate();
    },
    getstopAndInteract: function () {
        return tags.func_74771_c("stopAndInteract");
    },

    setAir: function (short) {
        tags.func_74777_a("Air", short);
        this.clientNeedsUpdate();
    },
    getAir: function () {
        return tags.func_74765_d("Air");
    },

    setAttackTime: function (short) {
        tags.func_74777_a("AttackTime", short);
        this.clientNeedsUpdate();
    },
    getAttackTime: function () {
        return tags.func_74765_d("AttackTime");
    },

    setDeathTime: function (short) {
        tags.func_74777_a("DeathTime", short);
        this.clientNeedsUpdate();
    },
    getDeathTime: function () {
        return tags.func_74765_d("DeathTime");
    },

    setFire: function (short) {
        tags.func_74777_a("Fire", short);
        this.clientNeedsUpdate();
    },
    getFire: function () {
        return tags.func_74765_d("Fire");
    },

    setHealth: function (short) {
        tags.func_74777_a("Health", short);
        this.clientNeedsUpdate();
    },
    getHealth: function () {
        return tags.func_74765_d("Health");
    },

    setHurtTime: function (short) {
        tags.func_74777_a("HurtTime", short);
        this.clientNeedsUpdate();
    },
    getHurtTime: function () {
        return tags.func_74765_d("HurtTime");
    },
    //
    setAccuracy: function (integer) {
        tags.func_74768_a("Accuracy", integer);
        this.clientNeedsUpdate();
    },
    getAccuracy: function () {
        return tags.func_74762_e("Accuracy");
    },

    setAggroRange: function (integer) {
        tags.func_74768_a("AggroRange", integer);
        this.clientNeedsUpdate();
    },
    getAggroRange: function () {
        return tags.func_74762_e("AggroRange");
    },

    setAttackRange: function (integer) {
        tags.func_74768_a("AttackRange", integer);
        this.clientNeedsUpdate();
    },
    getAttackRange: function () {
        return tags.func_74762_e("AttackRange");
    },

    setAttackSpeed: function (integer) {
        tags.func_74768_a("AttackSpeed", integer);
        this.clientNeedsUpdate();
    },
    getAttackSpeed: function () {
        return tags.func_74762_e("AttackSpeed");
    },

    setAttackStrenght: function (integer) {
        tags.func_74768_a("AttackStrenght", integer);
        this.clientNeedsUpdate();
    },
    getAttackStrenght: function () {
        return tags.func_74762_e("AttackStrenght");
    },

    setBurstCount: function (integer) {
        tags.func_74768_a("BurstCount", integer);
        this.clientNeedsUpdate();
    },
    getBurstCount: function () {
        return tags.func_74762_e("BurstCount");
    },

    setCombatRegen: function (integer) {
        tags.func_74768_a("CombatRegen", integer);
        this.clientNeedsUpdate();
    },
    getCombatRegen: function () {
        return tags.func_74762_e("CombatRegen");
    },

    setCreatureType: function (integer) {
        tags.func_74768_a("", integer);
        this.clientNeedsUpdate();
    },
    getCreatureType: function () {
        return tags.func_74762_e("");
    },

    setDimension: function (integer) {
        tags.func_74768_a("Dimension", integer);
        this.clientNeedsUpdate();
    },
    getDimension: function () {
        return tags.func_74762_e("Dimension");
    },

    setDistanceToMelee: function (integer) {
        tags.func_74768_a("DistanceToMelee", integer);
        this.clientNeedsUpdate();
    },
    getDistanceToMelee: function () {
        return tags.func_74762_e("DistanceToMelee");
    },

    setDoorInteract: function (integer) {
        tags.func_74768_a("DoorInteract", integer);
        this.clientNeedsUpdate();
    },
    getDoorInteract: function () {
        return tags.func_74762_e("DoorInteract");
    },

    setFactionID: function (integer) {
        tags.func_74768_a("FactionID", integer);
        this.clientNeedsUpdate();
    },
    getFactionID: function () {
        return tags.func_74762_e("FactionID");
    },

    setFindShelter: function (integer) {
        tags.func_74768_a("FindShelter", integer);
        this.clientNeedsUpdate();
    },
    getFindShelter: function () {
        return tags.func_74762_e("FindShelter");
    },

    setFireIndirect: function (integer) {
        tags.func_74768_a("FireIndirect", integer);
        this.clientNeedsUpdate();
    },
    getFireIndirect: function () {
        return tags.func_74762_e("FireIndirect");
    },

    setFireRate: function (integer) {
        tags.func_74768_a("FireRate", integer);
        this.clientNeedsUpdate();
    },
    getFireRate: function () {
        return tags.func_74762_e("FireRate");
    },

    setHealthRegen: function (integer) {
        tags.func_74768_a("HealthRegen", integer);
        this.clientNeedsUpdate();
    },
    getHealthRegen: function () {
        return tags.func_74762_e("HealthRegen");
    },

    setKnockBack: function (integer) {
        tags.func_74768_a("KnockBack", integer);
        this.clientNeedsUpdate();
    },
    getKnockBack: function () {
        return tags.func_74762_e("KnockBack");
    },

    setLootMode: function (integer) {
        tags.func_74768_a("LootMode", integer);
        this.clientNeedsUpdate();
    },
    getLootMode: function () {
        return tags.func_74762_e("LootMode");
    },

    setMaxExp: function (integer) {
        tags.func_74768_a("MaxExp", integer);
        this.clientNeedsUpdate();
    },
    getMaxExp: function () {
        return tags.func_74762_e("MaxExp");
    },

    setMaxFiringRange: function (integer) {
        tags.func_74768_a("MaxFiringRange", integer);
        this.clientNeedsUpdate();
    },
    getMaxFiringRange: function () {
        return tags.func_74762_e("MaxFiringRange");
    },


    setMaxHealth: function (integer) {
        tags.func_74768_a("MaxHealth", integer);
        this.clientNeedsUpdate();
    },
    getMaxHealth: function () {
        return tags.func_74762_e("MaxHealth");
    },


    setMinExp: function (integer) {
        tags.func_74768_a("MinExp", integer);
        this.clientNeedsUpdate();
    },
    getMinExp: function () {
        return tags.func_74762_e("MinExp");
    },


    setModRev: function (integer) {
        tags.func_74768_a("ModRev", integer);
        this.clientNeedsUpdate();
    },
    getModRev: function () {
        return tags.func_74762_e("ModRev");
    },


    setMoveSpeed: function (integer) {
        tags.func_74768_a("MoveSpeed", integer);
        this.clientNeedsUpdate();
    },
    getMoveSpeed: function () {
        return tags.func_74762_e("MoveSpeed");
    },


    setMoveState: function (integer) {
        tags.func_74768_a("MoveState", integer);
        this.clientNeedsUpdate();
    },
    getMoveState: function () {
        return tags.func_74762_e("MoveState");
    },


    setMovingPatern: function (integer) {
        tags.func_74768_a("MovingPatern", integer);
        this.clientNeedsUpdate();
    },
    getMovingPatern: function () {
        return tags.func_74762_e("MovingPatern");
    },


    setMovingPos: function (integer) {
        tags.func_74768_a("MovingPos", integer);
        this.clientNeedsUpdate();
    },
    getMovingPos: function () {
        return tags.func_74762_e("MovingPos");
    },


    setMovingState: function (integer) {
        tags.func_74768_a("MovingState", integer);
        this.clientNeedsUpdate();
    },
    getMovingState: function () {
        return tags.func_74762_e("MovingState");
    },


    setNpcJob: function (integer) {
        tags.func_74768_a("NpcJob", integer);
        this.clientNeedsUpdate();
    },
    getNpcJob: function () {
        return tags.func_74762_e("NpcJob");
    },


    setNpcVisible: function (integer) {
        tags.func_74768_a("NpcVisible", integer);
        this.clientNeedsUpdate();
    },
    getNpcVisible: function () {
        return tags.func_74762_e("NpcVisible");
    },


    setOnAttack: function (integer) {
        tags.func_74768_a("OnAttack", integer);
        this.clientNeedsUpdate();
    },
    getOnAttack: function () {
        return tags.func_74762_e("OnAttack");
    },


    setOrientation: function (integer) {
        tags.func_74768_a("Orientation", integer);
        this.clientNeedsUpdate();
    },
    getOrientation: function () {
        return tags.func_74762_e("Orientation");
    },


    setPortalCooldown: function (integer) {
        tags.func_74768_a("PortalCooldown", integer);
        this.clientNeedsUpdate();
    },
    getPortalCooldown: function () {
        return tags.func_74762_e("PortalCooldown");
    },


    setPotionAmp: function (integer) {
        tags.func_74768_a("PotionAmp", integer);
        this.clientNeedsUpdate();
    },
    getPotionAmp: function () {
        return tags.func_74762_e("PotionAmp");
    },


    setPotionDuration: function (integer) {
        tags.func_74768_a("PotionDuration", integer);
        this.clientNeedsUpdate();
    },
    getPotionDuration: function () {
        return tags.func_74762_e("PotionDuration");
    },


    setPotionEffect: function (integer) {
        tags.func_74768_a("PotionEffect", integer);
        this.clientNeedsUpdate();
    },
    getPotionEffect: function () {
        return tags.func_74762_e("PotionEffect");
    },


    setRangeAndMelee: function (integer) {
        tags.func_74768_a("RangeAndMelee", integer);
        this.clientNeedsUpdate();
    },
    getRangeAndMelee: function () {
        return tags.func_74762_e("RangeAndMelee");
    },


    setRespawnTime: function (integer) {
        tags.func_74768_a("RespawnTime", integer);
        this.clientNeedsUpdate();
    },
    getRespawnTime: function () {
        return tags.func_74762_e("RespawnTime");
    },


    setRole: function (integer) {
        tags.func_74768_a("Role", integer);
        this.clientNeedsUpdate();
    },
    getRole: function () {
        return tags.func_74762_e("Role");
    },


    setShotCount: function (integer) {
        tags.func_74768_a("ShotCount", integer);
        this.clientNeedsUpdate();
    },
    getShotCount: function () {
        return tags.func_74762_e("ShotCount");
    },


    setShowName: function (integer) {
        tags.func_74768_a("ShowName", integer);
        this.clientNeedsUpdate();
    },
    getShowName: function () {
        return tags.func_74762_e("ShowName");
    },


    setSize: function (integer) {
        tags.func_74768_a("Size", integer);
        this.clientNeedsUpdate();
    },
    getSize: function () {
        return tags.func_74762_e("Size");
    },


    setSpawnCycle: function (integer) {
        tags.func_74768_a("SpawnCycle", integer);
        this.clientNeedsUpdate();
    },
    getSpawnCycle: function () {
        return tags.func_74762_e("SpawnCycle");
    },


    setStandingState: function (integer) {
        tags.func_74768_a("StandingState", integer);
        this.clientNeedsUpdate();
    },
    getStandingState: function () {
        return tags.func_74762_e("StandingState");
    },


    setTacticalRadius: function (integer) {
        tags.func_74768_a("TacticalRadius", integer);
        this.clientNeedsUpdate();
    },
    getTacticalRadius: function () {
        return tags.func_74762_e("TacticalRadius");
    },


    setTacticalVariant: function (integer) {
        tags.func_74768_a("TacticalVariant", integer);
        this.clientNeedsUpdate();
    },
    getTacticalVariant: function () {
        return tags.func_74762_e("TacticalVariant");
    },


    setWalkingRange: function (integer) {
        tags.func_74768_a("WalkingRange", integer);
        this.clientNeedsUpdate();
    },
    getWalkingRange: function () {
        return tags.func_74762_e("WalkingRange");
    },


    setmaxDelay: function (integer) {
        tags.func_74768_a("maxDelay", integer);
        this.clientNeedsUpdate();
    },
    getmaxDelay: function () {
        return tags.func_74762_e("maxDelay");
    },


    setminDelay: function (integer) {
        tags.func_74768_a("minDelay", integer);
        this.clientNeedsUpdate();
    },
    getminDelay: function () {
        return tags.func_74762_e("minDelay");
    },


    setpArea: function (integer) {
        tags.func_74768_a("pArea", integer);
        this.clientNeedsUpdate();
    },
    getpArea: function () {
        return tags.func_74762_e("pArea");
    },


    setpDamage: function (integer) {
        tags.func_74768_a("pDamage", integer);
        this.clientNeedsUpdate();
    },
    getpDamage: function () {
        return tags.func_74762_e("pDamage");
    },


    setpDur: function (integer) {
        tags.func_74768_a("pDur", integer);
        this.clientNeedsUpdate();
    },
    getpDur: function () {
        return tags.func_74762_e("pDur");
    },


    setpEffAmp: function (integer) {
        tags.func_74768_a("pEffAmp", integer);
        this.clientNeedsUpdate();
    },
    getpEffAmp: function () {
        return tags.func_74762_e("pEffAmp");
    },


    setpEffect: function (integer) {
        tags.func_74768_a("pEffect", integer);
        this.clientNeedsUpdate();
    },
    getpEffect: function () {
        return tags.func_74762_e("pEffect");
    },


    setpImpact: function (integer) {
        tags.func_74768_a("pImpact", integer);
        this.clientNeedsUpdate();
    },
    getpImpact: function () {
        return tags.func_74762_e("pImpact");
    },


    setpSize: function (integer) {
        tags.func_74768_a("pSize", integer);
        this.clientNeedsUpdate();
    },
    getpSize: function () {
        return tags.func_74762_e("pSize");
    },


    setpSpeed: function (integer) {
        tags.func_74768_a("pSpeed", integer);
        this.clientNeedsUpdate();
    },
    getpSpeed: function () {
        return tags.func_74762_e("pSpeed");
    },


    setpTrail: function (integer) {
        tags.func_74768_a("pTrail", integer);
        this.clientNeedsUpdate();
    },
    getpTrail: function () {
        return tags.func_74762_e("pTrail");
    },


    setKilledTime: function (long) {
        tags.func_74772_a("KilledTime", long);
        this.clientNeedsUpdate();
    },
    getKilledTime: function () {
        return tags.func_74763_f("KilledTime");
    },


    setTotalTicksAlive: function (long) {
        tags.func_74772_a("TotalTicksAlive", long);
        this.clientNeedsUpdate();
    },
    getTotalTicksAlive: function () {
        return tags.func_74763_f("TotalTicksAlive");
    },


    setUUIDLeast: function (long) {
        tags.func_74772_a("UUIDLeast", long);
        this.clientNeedsUpdate();
    },
    getUUIDLeast: function () {
        return tags.func_74763_f("UUIDLeast");
    },


    setUUIDMost: function (long) {
        tags.func_74772_a("UUIDMost", long);
        this.clientNeedsUpdate();
    },
    getUUIDMost: function () {
        return tags.func_74763_f("UUIDMost");
    },


    setAbsorptionAmount: function (float) {
        tags.func_74776_a("AbsorptionAmount", float);
        this.clientNeedsUpdate();
    },
    getAbsorptionAmount: function () {
        return tags.func_74760_g("AbsorptionAmount");
    },


    setFallDistance: function (float) {
        tags.func_74776_a("FallDistance", float);
        this.clientNeedsUpdate();
    },
    getFallDistance: function () {
        return tags.func_74760_g("FallDistance");
    },


    setHealF: function (float) {
        tags.func_74776_a("HealF", float);
        this.clientNeedsUpdate();
    },
    getHealF: function () {
        return tags.func_74760_g("HealF");
    },


    setPositionOffsetX: function (float) {
        tags.func_74776_a("PositionOffsetX", float);
        this.clientNeedsUpdate();
    },
    getPositionOffsetX: function () {
        return tags.func_74760_g("PositionOffsetX");
    },


    setPositionOffsetY: function (float) {
        tags.func_74776_a("PositionOffsetY", float);
        this.clientNeedsUpdate();
    },
    getPositionOffsetY: function () {
        return tags.func_74760_g("PositionOffsetY");
    },


    setPositionOffsetZ: function (float) {
        tags.func_74776_a("PositionOffsetZ", float);
        this.clientNeedsUpdate();
    },
    getPositionOffsetZ: function () {
        return tags.func_74760_g("PositionOffsetZ");
    },

    setCloakTexture: function (String) {
        tags.func_74778_a("CloakTexture", String);
        this.clientNeedsUpdate();
    },
    getCloakTexture: function () {
        return tags.func_74779_i("CloakTexture");
    },

    setCustomName: function (String) {
        tags.func_74778_a("CustomName", String);
        this.clientNeedsUpdate();
    },
    getCustomName: function () {
        return tags.func_74779_i("CustomName");
    },

    setFiringSound: function (String) {
        tags.func_74778_a("FiringSound", String);
        this.clientNeedsUpdate();
    },
    getFiringSound: function () {
        return tags.func_74779_i("FiringSound");
    },

    setGlowTexture: function (String) {
        tags.func_74778_a("GlowTexture", String);
        this.clientNeedsUpdate();
    },
    getGlowTexture: function () {
        return tags.func_74779_i("GlowTexture");
    },

    setLinkedNpcName: function (String) {
        tags.func_74778_a("LinkedNpcName", String);
        this.clientNeedsUpdate();
    },
    getLinkedNpcName: function () {
        return tags.func_74779_i("LinkedNpcName");
    },

    setName: function (String) {
        tags.func_74778_a("Name", String);
        this.clientNeedsUpdate();
    },
    getName: function () {
        return tags.func_74779_i("Name");
    },

    setNpcAngrySound: function (String) {
        tags.func_74778_a("NpcAngrySound", String);
        this.clientNeedsUpdate();
    },
    getNpcAngrySound: function () {
        return tags.func_74779_i("NpcAngrySound");
    },

    setNpcDeathSound: function (String) {
        tags.func_74778_a("NpcDeathSound", String);
        this.clientNeedsUpdate();
    },
    getNpcDeathSound: function () {
        return tags.func_74779_i("NpcDeathSound");
    },

    setNpcHurtSound: function (String) {
        tags.func_74778_a("NpcHurtSound", String);
        this.clientNeedsUpdate();
    },
    getNpcHurtSound: function () {
        return tags.func_74779_i("NpcHurtSound");
    },

    setNpcIdleSound: function (String) {
        tags.func_74778_a("NpcIdleSound", String);
        this.clientNeedsUpdate();
    },
    getNpcIdleSound: function () {
        return tags.func_74779_i("NpcIdleSound");
    },

    setNpcStepSound: function (String) {
        tags.func_74778_a("NpcStepSound", String);
        this.clientNeedsUpdate();
    },
    getNpcStepSound: function () {
        return tags.func_74779_i("NpcStepSound");
    },

    setScriptLanguage: function (String) {
        tags.func_74778_a("ScriptLanguage", String);
        this.clientNeedsUpdate();
    },
    getScriptLanguage: function () {
        return tags.func_74779_i("ScriptLanguage");
    },

    setSkinUrl: function (String) {
        tags.func_74778_a("SkinUrl", String);
        this.clientNeedsUpdate();
    },
    getSkinUrl: function () {
        return tags.func_74779_i("SkinUrl");
    },

    setTexture: function (String) {
        tags.func_74778_a("Texture", String);
        this.clientNeedsUpdate();
    },
    getTexture: function () {
       return tags.func_74779_i("Texture");
    },


    getNpcInv:
        function getNpcInv(id) {
            var handler = {
                setCount: function (quantidade) {
                    tags.func_150295_c("NpcInv", 10).func_150305_b(id).func_74774_a("Count", quantidade);
                    newNpc.clientNeedsUpdate();
                },
                setSlot: function (quantidade) {
                    tags.func_150295_c("NpcInv", 10).func_150305_b(id).func_74774_a("Slot", quantidade);
                    newNpc.clientNeedsUpdate();
                },
                setDamage: function (quantidade) {
                    tags.func_150295_c("NpcInv", 10).func_150305_b(id).func_74777_a("Damage", quantidade),
                        newNpc.clientNeedsUpdate();
                },
                setId: function (nomeId) {
                    tags.func_150295_c("NpcInv", 10).func_150305_b(id).func_74778_a("id", nomeId)
                    newNpc.clientNeedsUpdate();
                },
                dropChance: {
                    getChance: function () { return tags.func_150295_c("DropChance", 10).func_150305_b(id).func_74762_e("Integer"); },
                    setChance: function (quantidade) {
                        tags.func_150295_c("DropChance", 10).func_150305_b(id).func_74768_a("Integer", quantidade);
                        newNpc.clientNeedsUpdate();
                    }
                },

                getCount: function () { return tags.func_150295_c("NpcInv", 10).func_150305_b(id).func_74771_c("Count"); },
                getSlot: function () { return tags.func_150295_c("NpcInv", 10).func_150305_b(id).func_74771_c("Slot"); },
                getDamage: function () { return tags.func_150295_c("NpcInv", 10).func_150305_b(id).func_74765_d("Damage"); },
                getId: function () { return tags.func_150295_c("NpcInv", 10).func_150305_b(id).func_74779_i("id"); },
            }

            return handler;
        },
};

