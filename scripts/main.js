require("content/turrets");
require("weathers");

Vars.content.units().each(e => e.health *= 1);
Planets.sun.atmosphereRadOut = 5;
Planets.sun.lightColor = Color.purple;

Planets.serpulo.orbitRadius = 5.6;
Planets.serpulo.atmosphereColor = Color.purple;
