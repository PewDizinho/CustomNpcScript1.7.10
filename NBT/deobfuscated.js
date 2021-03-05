







function setNbtString(p, tag, value) {
    p.getMCEntity().getEntityData().func_74775_l("PlayerPersisted").func_74778_a(tag, value);
}
function getNbtString(p, tag) {
    return p.getMCEntity().getEntityData().func_74775_l("PlayerPersisted").func_74779_i(tag);
}
function setNbtFloat(p, tag, value) {
    p.getMCEntity().getEntityData().func_74776_a("PlayerPersisted").func_74776_a(tag, value);
}
function getNbtFloat(p, tag) {
    return p.getMCEntity().getEntityData().func_74775_l("PlayerPersisted").func_74760_g(tag);
}
function setNbtDouble(p, tag, value) {
    p.getMCEntity().getEntityData().func_74776_a("PlayerPersisted").func_74780_a(tag, value);
}
function getNbtDouble(p, tag) {
    return p.getMCEntity().getEntityData().func_74775_l("PlayerPersisted").func_74769_h(tag);
}
function setNbtBoolean(p, tag, value) {
    p.getMCEntity().getEntityData().func_74776_a("PlayerPersisted").func_74757_a(tag, value);
}

function getNbtBoolean(p, tag) {
    return p.getMCEntity().getEntityData().func_74775_l("PlayerPersisted").func_74767_n(tag);
}

function setNbtShort(p, tag, value) {
    p.getMCEntity().getEntityData().func_74776_a("PlayerPersisted").func_74777_a(tag, value);
}
function getNbtShort(p, tag) {
    return p.getMCEntity().getEntityData().func_74775_l("PlayerPersisted").func_74765_d(tag);
}

function setNbtByte(p, tag, value) {
    p.getMCEntity().getEntityData().func_74776_a("PlayerPersisted").func_74774_a(tag, value);
}
function getNbtByte(p, tag) {
    return p.getMCEntity().getEntityData().func_74775_l("PlayerPersisted").func_74771_c(tag);
}

function setNbtLong(p, tag, value) {
    p.getMCEntity().getEntityData().func_74776_a("PlayerPersisted").func_74774_a(tag, value);
}

function getNbtLong(p, tag) {
    return p.getMCEntity().getEntityData().func_74775_l("PlayerPersisted").func_74772_a(tag);
}

function getNbtCompound(p, tag) {
    return p.getMCEntity().getEntityData().func_74775_l("PlayerPersisted").func_74775_l(tag);
}



