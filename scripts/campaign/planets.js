const ulopers = extend(Planet, "ulopers", Planets.sun, 3, 3, {
    generator: new SerpuloPlanetGenerator(),
    meshLoader: () => new HexMesh(this, 6),
    bloom: true,
    radius: 1,
    accessible: true,
    hasAtmosphere: true,
    atmosphereColor: Color.valueOf("ffdd55"),
    atmosphereRadIn: 0.06,
    atmosphereRadOut: 0.09,
    localizedName: "Ulopers"
});
ulopers.meshLoader = () => extend(HexMesh, templura, 6, {});

const graveyard = extend(SectorPreset, "graveyard", ulopers, 3, {
    captureWave: 40,
    description: "where your graveyard will be",
    localizedName: "Graveyard",
    difficulty: 2,
    alwaysUnlocked: true
});

const death = extend(SectorPreset, "death", ulopers, 6, {
    captureWave: 50,
    localizedName: "Death",
    difficulty: 3
});

const valleyofsouls = extend(SectorPreset, "valleyofsouls", ulopers, 1, {
    captureWave: 30,
    localizedName: "Valley Of Souls",
    difficulty: 1,
});

const shatteredspirits = extend(SectorPreset, "shatteredspirits", ulopers, 8, {
    captureWave: 60,
    localizedName: "Shattered Spirits",
    difficulty: 4,
});
    
const lostsouls = extend(SectorPreset, "lostsouls", ulopers, 14, {
    captureWave: 70,
    localizedName: "Lost Souls",
    difficulty: 5,
});

const lostdesert = extend(SectorPreset, "lostdesert", ulopers, 18, {
    captureWave: 100,
    localizedName: "Lost Desert",
    difficulty: 10, 
});

const hell = extend(SectorPreset, "hell", ulopers, 24, {
    captureWave: 150,
    localizedName: "hell",
    difficulty: 10,
});

const firstcru = extend(SectorPreset, "firstcru", ulopers, 28, {
    captureWave: 150,
    localizedName: "cattka rucx pam",
    difficulty: 20,
});

module.exports = {
    ulopers: ulopers,
    graveyard: graveyard,
    death: death, 
    valleyofsouls: valleyofsouls
    shatteredspirits: shatteredspirits, 
    lostsouls: lostsouls,
    hell: hell,
    firstcru: firstcru
}

//moon lol why why not
const moon = extend(Planet, "moon", ulopers, 0, 2.32, {});
moon.atmosphereColor = Color.valueOf("a2a2a2");
moon.atmosphereRadIn = 0.03;
moon.accessible = false;
moon.meshLoader = () => new SunMesh(cultch, 3,
    5, 0.3, 1.7, 1.2, 1,
    1.1,
    Color.valueOf("a2a2a2"),
    Color.valueOf("a2a2a2"),
    Color.valueOf("a2a2a2"),
    Color.valueOf("a2a2a2"),
    Color.valueOf("ffdd55"),
    Color.valueOf("ffdd55")
);

module.exports = {
    moon: moon
};
