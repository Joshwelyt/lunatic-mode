//storming magma with a slight of grey
const fireEffect = new Effect(60, e => {
    Draw.color(Color.valueOf("404040"));
    Fill.circle(e.x, e.y, e.fout() * 2);
});

const magma = new StatusEffect("magma");
magma.speedMultiplier = 0.6;
magma.damage = 0.05;
magma.color = Color.valueOf("404040");
magma.effect = fireEffect;

const magmaStorm = new ParticleWeather("magmaStorm");
magmaStorm.attrs.set(Attribute.light, -0.05);
magmaStorm.attrs.set(Attribute.water, -0.02);
magmaStorm.attrs.set(Attribute.spores, -0.1);
magmaStorm.particleRegion = "particle";
magmaStorm.noiseScale = 1000;
magmaStorn.noisePath = "fog";
magmaStorm.force = 3.9;
magmaStorm.xspeed = 0.25;
magmaStorm.xspeed = 0.25;
magmaStorm.baseSpeed = 1.6;
magmaStorm.drawParticles = true;
magmaStorm.drawNoise = true;
magmaStorm.sizeMin = 4;
magmaStorm.sizeMax = 16;
magmaStorm.density = 2600;
magmaStorm.opacityMultiplier = 1;
magmaStorn.noiseLayers = 8;
magmaStorn.status = magma;
magmaStorm.color = Color.valueOf("404040");
magmaStorm.noiseColor = Color.valueOf("a2a2a2");
