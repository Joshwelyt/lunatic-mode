//test
//const ulopersGen = require("ulopersGen")
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
ulopers.meshLoader = () => extend(HexMesh, ulopers, 6, {});

const death = extend(SectorPreset, "death", ulopers, 6, {
    captureWave: 60,
    description: "the first sector of ulopers.",
    localizedName: "Death",
    difficulty: 1,
    alwaysUnlocked: true
});

const graveyard = extend(SectorPreset, "graveyard", templura, 10, {
    captureWave: 70,
    localizedName: "Graveyard",
    difficulty: 3
});

module.exports = {
    ulopers: ulopers,
    death: death,
    graveyard: graveyard
};
