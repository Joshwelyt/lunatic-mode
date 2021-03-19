Vars.content.blocks().each(e => {
    if(e instanceof Turret && e.team == Team.sharded) {
            e.reloadTime = 100;
            e.spread = 30;
            e.inaccuracy = 80;
            e.recoilAmount = 2;
            e.restitution = 0;
            e.xRand = 0;
            e.cooldown = 150;
            e.rotateSpeed = 2;
            e.targetGround = true;
            e.targetAir = true;
        if(typeof(e.shootType) !== "undefined") {
            if(typeof(e.shootType.collidesGround) !== "undefined") e.shootType.collidesGround = true;
            if(typeof(e.shootType.collidesAir) !== "undefined") e.shootType.collidesAir = true;
        }
    }
});

Blocks.lancer.chargeTime = 140;
Blocks.lancer.chargeMaxDelay = 140;
Blocks.meltdown.range = 49;
Blocks.meltdown.shootDuration = 50;
Blocks.meltdown.shootType.length = 49;
