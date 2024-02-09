var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    // define o background, neste caso uma cor sólida
    game.stage.backgroundColor = "#C74634"
    // this.load.image('var', 'assets/...');

}

function create() {

   //  this.add.image(400, 300, 'var');
    
}

function update() {

}
