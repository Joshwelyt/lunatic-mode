require("content/turrets");
require("content/blocks");

Vars.content.units().each(e => e.health *= 2);
Planets.sun.atmosphereRadOut = 10;
Planets.sun.lightColor = Color.red;
Planets.serpulo.orbitRadius = 5.6;
if(!Vars.headless){
  Core.app.post(() => {
    const meta = Vars.mods.locateMod("lunaticmode").meta;
    meta.displayName = "[purple]lunatic mode";
    meta.author = "[#FCC21B]joshwelyt";
    meta.description = "[red]why did you download this";
  });
