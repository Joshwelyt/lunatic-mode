const planetGen = global.ulopers.planetgen;

const ulopers = extend(Planet, "ulopers", Planets.sun, 5, 1, {});
ulopers.generator = planetGen.ulopers;
ulopers.meshLoader = () => new HexMesh(ulopers, 6);
ulopers.atmosphereColor = Color.valueOf("ffdd55");
ulopers.atmosphereRadIn = 1.003;
ulopers.atmosphereRadOut = 1.37;
ulopers.startSector = 10;

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
    ulopers: ulopers,
    moon: moon
};
