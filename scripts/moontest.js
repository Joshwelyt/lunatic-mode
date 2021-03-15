
//moon test
const moon = extend(Planet, "moon", serpulo, 0, 2.32, {});
moon.atmosphereColor = Color.valueOf("a2a2a2");
moon.atmosphereRadIn = 0.03;
moon.accessible = false;
moon.meshLoader = () => new SunMesh(serpulo, 3,
    5, 0.3, 1.7, 1.2, 1,
    1.1,
    Color.valueOf("a2a2a2"),
    Color.valueOf("a2a2a2"),
    Color.valueOf("a2a2a2"),
    Color.valueOf("ffdd55"),
    Color.valueOf("ffdd55"),
    Color.valueOf("ffdd55")
);

module.exports = {
    moon: moon
};
