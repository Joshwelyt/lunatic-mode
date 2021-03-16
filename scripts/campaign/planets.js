var arrs = [
        [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksandWater, Blocks.stone, Blocks.stone],
        [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksandWater, Blocks.stone, Blocks.stone, Blocks.stone],
        [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksandWater, Blocks.stone, Blocks.stone, Blocks.stone],
        [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.salt, Blocks.salt, Blocks.sand, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.iceSnow, Blocks.ice],
        [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.basalt, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice],
        [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.snow, Blocks.ice],
        [Blocks.deepwater, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.grass, Blocks.snow, Blocks.basalt, Blocks.basalt, Blocks.basalt, Blocks.ice, Blocks.snow, Blocks.ice],
        [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.basalt, Blocks.grass, Blocks.basalt, Blocks.hotrock, Blocks.basalt, Blocks.ice, Blocks.snow, Blocks.ice, Blocks.ice],
        [Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.grass, Blocks.dirt, Blocks.snow, Blocks.basalt, Blocks.basalt, Blocks.ice, Blocks.snow, Blocks.ice, Blocks.ice],
        [Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.dirt, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice],
        [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.mud, Blocks.mud, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
        [Blocks.darksandWater, Blocks.darksandWater, Blocks.darksand, Blocks.dirt, Blocks.grass, Blocks.dirt, Blocks.iceSnow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
        [Blocks.darksandWater, Blocks.darksand, Blocks.snow, Blocks.ice, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice]
    ];
    const ulopersGenerator = extend(SerpuloPlanetGenerator, {
        getBlock(p){
            this.arr = arrs;
            this.super$getBlock(p);
        }
    });
    ulopersGenerator.arr = arrs;
    const ulopers = new Planet("ulopers", Planets.sun, 4, 0.8);
    ulopers.generator = ulopersGenerator;
    ulopers.mesh = new HexMesh(ulopers, 8);
    ulopers.orbitRadius = 7;
    ulopers.orbitTime = 2.5 * 60;
    ulopers.rotateTime = 6%;
    ulopers.bloom = true;
    ulopers.accessible = true;
    ulopers.hasAtmosphere = true;
    ulopers.atmosphereColor = Blocks.darksand.mapColor.cpy().mul(Pal.lightFlame);
    ulopers.atmosphereRadIn = 0.075;
    ulopers.atmosphereRadOut = 0.3;
    ulopers.startSector = 1;
    ulopers.localizedName = "Ulopers";

    Planets.sun.accessible = true;
    Planets.sun.localizedName = "[coral]Sun"









    const antarcticaSurvival = new SectorPreset("antarcticaSurvival", tantrosia, 1);
    antarcticaSurvival.captureWave = 60;
    antarcticaSurvival.localizedName = "Antarctica Survival";
    antarcticaSurvival.difficulty = 6;
    antarcticaSurvival.alwaysUnlocked = true;

    const centralBase = new SectorPreset("centralBase", grasia, 6);
    centralBase.captureWave = 55;
    centralBase.localizedName = "Centeral Base";
    centralBase.difficulty = 6;
    centralBase.alwaysUnlocked = true;


    const desertCanyon = new SectorPreset("desertCanyon", grasia, 7);
    desertCanyon.captureWave = 40;
    desertCanyon.localizedName = "Desert Canyon";
    desertCanyon.difficulty = 5;
    desertCanyon.alwaysUnlocked = true;

    const iceBreak = new SectorPreset("iceBreak", tantrosia, 2);
    iceBreak.localizedName = "Ice Break";
    iceBreak.difficulty = 8;
    iceBreak.alwaysUnlocked = true;

    const polarOutpost = new SectorPreset("polarOutpost", tantrosia, 3);
    polarOutpost.localizedName = "Polar Outpost";
    polarOutpost.difficulty = 5;
    polarOutpost.alwaysUnlocked = true;

    const saltirekArchipelago = new SectorPreset("saltirekArchipelago", Planets.serpulo, 4);
    saltirekArchipelago.localizedName = "Saltirek Archipelago";
    saltirekArchipelago.difficulty = 5;
    saltirekArchipelago.alwaysUnlocked = true;

    const saltirekLanding = new SectorPreset("saltirekLanding", Planets.serpulo, 5);
    saltirekLanding.localizedName = "Saltirek Landing";
    saltirekLanding.difficulty = 7;
    saltirekLanding.alwaysUnlocked = true;

    const sporeErosion = new SectorPreset("sporeErosion", Planets.serpulo, 8);
    sporeErosion.localizedName = "Spore Erosion";
    sporeErosion.difficulty = 8;
    sporeErosion.alwaysUnlocked = true;

});
