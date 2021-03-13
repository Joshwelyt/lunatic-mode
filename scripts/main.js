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

//so hard it limits your fucking vision
Events.on(ClientLoadEvent, () => {
  Vars.renderer.maxZoom = 10.99999;
  Vars.renderer.minZoom = 20.99999;
});
