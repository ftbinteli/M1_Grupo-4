var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#C74634', // define o background, neste caso uma cor sólida
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {

    // this.load.image('var', 'assets/...');

}

function create() {

   //  this.add.image(400, 300, 'var');
    
}

function update() {

}
