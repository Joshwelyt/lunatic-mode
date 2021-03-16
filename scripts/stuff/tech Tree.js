let ulopers = require("ulopers");
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

node(Blocks.conveyor, ulopers.death, null, null);

node(ulopers.death, ulopers.graveyard, null, Seq.with(new Objectives.SectorComplete(ulopers.death)));
