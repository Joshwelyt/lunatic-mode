//moon
const moon = new JavaAdapter(Planet, {}, "moon", Planets.serpulo, 4, 0.7);
moon.meshLoader = () => new SunMesh(moon, 4, 5, 0.3, 1.7, 1.2, 1, 1.5, Color.valueOf("847982"), Color.valueOf("939393"), Color.valueOf("837881"));
moon.accessible = false;
moon.hasAtmosphere = false;
