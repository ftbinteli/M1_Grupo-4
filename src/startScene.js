var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: [startScene]
};

class startScene extends Phaser.scene {
    constructor (){
        super ({key: 'startScene'});
        
    }
    preload (){
        this.load.image
    }
    create (){

    }
    update (){
        
    }
}