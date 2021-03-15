let ulopers = require("planets");
//Casually steals from [Gdeft/substructure]'s techtree.js

/**
 * Node for the research tech tree.
 *
 * @property {UnlockableContent}    parent          - The parent of the current node.
 * @property {UnlockableContent}    contentType     - The unlockable content that the current node contains.
 * @property {ItemStack}            requirements    - The research requirements required to unlock this node, will use the default if set to null.
 * @property {Seq}                  objectives      - A sequence of Objectives required to unlock this node. Can be null.
 */
const node = (parent, contentType, requirements, objectives) => {
  const tnode = new TechTree.TechNode(TechTree.get(parent), contentType, requirements != null ? requirements : contentType.researchRequirements());
  let used = new ObjectSet();
  
  if(objectives != null){
    tnode.objectives.addAll(objectives);
  };
};


node(Blocks.conveyor, ulopers.graveyard, null, null);

node(ulopers.graveyard, ulopers.death, null, Seq.with(new Objectives.SectorComplete(ulopers.graveyard)));

node(ulopers.death, ulopers.valleyofsouls, null, Seq.with(new Objectives.SectorComplete(ulopers.death)));

node(ulopers.valleyofsouls, ulopers.shatteredspirits, null, Seq.with(new Objectives.SectorComplete(ulopers.valleyofsouls)));

node(ulopers.graveyard, ulopers.lostsouls, null, Seq.with(new Objectives.SectorComplete(ulopers.graveyard)));

node(ulopers.lostsouls, ulopers.lostdesert, null, Seq.with(new Objectives.SectorComplete(ulopers.lostsouls)))

node(ulopers.lostdesert, ulopers.hell, null, Seq.with(new Objectives.SectorComplete(ulopers.lostdesert)));

node(ulopers.graveyard, ulopers.firstcru, null, Seq.with(new Objectives.SectorComplete(ulopers.graveyard), new Objectives.SectorComplete(ulopers.hell)));
