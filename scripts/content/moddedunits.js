const mechbossone = extend(UnitType, "mechboss1", {});
mechbossone.constructor = () => extend(MechUnit, {
    update(){
        this.super$update()
        if(this.setUp != true || Mathf.chance(0.01)){
      
            this.setUp = true
      
            for(let i = 0; i < this.mounts.length; i++){
                let mount = this.mounts[i];
                let weapon = mount.weapon;
                if(!fc.statusCheck(this, StatusEffects.boss);
