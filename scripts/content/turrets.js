//turret stuff
Vars.content.blocks().each(e => {
    if(e instanceof Turret && e.team == Team.sharded)} {
        e.reloadTime = 80;
        e.spread = 50;
        e.inaccuracy = 80;
        e.recoilAmount = 0;
        e.restitution = 0;
        e.xRand = 0;
        e.cooldown = 100;
        e.rotateSpeed = 2;
        e.targetGround = true;
        e.targetAir = true;
        if(typeof(e.shootType) !== "undefined") {
            if(typeof(e.shootType.collidesGround) !== "undefined") e.shootType.collidesGround = true;
            if(typeof(e.shootType.collidesAir) !== "undefined") e.shootType.collidesAir = true;
        }
    }
});

// Lancesuck
Blocks.lancer.chargeTime = 50;
Blocks.lancer.chargeMaxDelay = 50;

// Meltshort
Blocks.meltdown.range = 60;
Blocks.meltdown.shootDuration = 60;
Blocks.meltdown.shootType.length = 60;
