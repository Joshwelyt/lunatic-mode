require("content/turrets");

Vars.content.units().each(e => e.health *= 1);
Planets.sun.atmosphereRadOut = 5;
Planets.sun.lightColor = Color.purple;

Planets.serpulo.orbitRadius = 5.6;
Planets.serpulo.atmosphereColor = Color.purple;

if(!Vars.headless){
  Core.app.post(() => {
    const meta = Vars.mods.locateMod("lunaticmode").meta;
    meta.displayName = "[purple]lunatic mode";
    meta.author = "[#FCC21B]joshwelyt";
    meta.description = "[red]why did you download this";
  });
