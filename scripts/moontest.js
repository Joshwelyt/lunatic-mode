//moon test third


const moon = new JavaAdapter(Planet, {}, "moon", Planets.serpulo, 4, 0.7);
moon.meshLoader = () => new SunMesh(moon, 4, 5, 0.3, 1.7, 1.2, 1, 1.5, Color.valueOf("a2a2a2"), Color.valueOf("ffdd55"), Color.valueOf("a2a2a2"));
moon.accessible = false;
moon.hasAtmosphere = false;
